import fs from 'fs';

const content = fs.readFileSync('svgfile.txt', 'utf8');
const matches = content.matchAll(/<text([^>]*)>(.*?)<\/text>/gi);
let result = [];
for (const match of matches) {
    const attributes = match[1];
    const text = match[2].trim().replace(/<tspan[^>]*>/gi, '').replace(/<\/tspan>/gi, ' ');
    
    const x = attributes.match(/x="([\d.-]+)"/)?.[1];
    const y = attributes.match(/y="([\d.-]+)"/)?.[1];
    const size = attributes.match(/font-size="([\d.-]+)"/)?.[1];

    result.push({ text, y: parseFloat(y || 0), x: parseFloat(x || 0), size });
}

result.sort((a, b) => a.y - b.y);
fs.writeFileSync('parsed_structure.json', JSON.stringify(result, null, 2));
console.log("Found " + result.length + " text elements.");
