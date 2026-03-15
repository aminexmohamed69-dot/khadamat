import * as pdfjsLib from 'pdfjs-dist';

// Point to the worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

export interface Plot {
  code: string; // e.g. HC2, HE3
  number: string; // e.g. 12
  type: 'commercial' | 'residential'; // HC -> commercial, HE -> residential
  floor: string; // 2, 3, 4
  category: 'R+2' | 'R+3' | 'R+4';
}

export async function parseProjectPdf(url: string): Promise<Plot[]> {
  try {
    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;
    const plots: Plot[] = [];

    // Process all pages
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      
      // We want to find patterns like HC2, HE3, and numbers that might be plot numbers
      // This is a heuristic: we look for strings matching the codes
      const items = textContent.items.map((item: any) => ({
        str: item.str.trim(),
        x: item.transform[4],
        y: item.transform[5]
      }));

      // Filter for code-like strings (HC2, HC3, HC4, HE2, HE3, HE4)
      const codes = items.filter(item => /H[CE][234]/i.test(item.str));
      
      // For each code, find a nearby numeric "plot number"
      codes.forEach(codeItem => {
        const code = codeItem.str.toUpperCase();
        
        // Find the closest number to this code (distance heuristic)
        let closestNum = '';
        let minDist = Infinity;

        items.forEach(numItem => {
          if (/^\d+$/.test(numItem.str)) {
            const dist = Math.sqrt(
              Math.pow(codeItem.x - numItem.x, 2) + 
              Math.pow(codeItem.y - numItem.y, 2)
            );
            if (dist < minDist && dist < 100) { // Limit distance to keep it "nearby"
              minDist = dist;
              closestNum = numItem.str;
            }
          }
        });

        if (closestNum) {
          const type = code.startsWith('HC') ? 'commercial' : 'residential';
          const floor = code.slice(2);
          const category = `R+${floor}` as 'R+2' | 'R+3' | 'R+4';

          // Prevent duplicates if same code/number/category found twice due to PDF artifacts
          const exists = plots.find(p => p.code === code && p.number === closestNum);
          if (!exists) {
            plots.push({
              code,
              number: closestNum,
              type,
              floor,
              category
            });
          }
        }
      });
    }

    return plots.sort((a, b) => parseInt(a.number) - parseInt(b.number));
  } catch (error) {
    console.error('Error parsing PDF:', error);
    return [];
  }
}
