const fs = require('fs');

async function update() {
  const names = ['ferrari', 'lamborghini', 'bmw', 'chevrolet'];
  let replacement = '  const CarLogos = [\n';
  
  for (const name of names) {
    const res = await fetch('https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/' + name + '.svg');
    let svg = await res.text();
    // remove width and height if present, add className for full brightness
    svg = svg.replace('<svg ', '<svg className="h-12 w-auto text-white fill-current opacity-100" ');
    replacement += `    { name: '${name}', svg: ${svg} },\n`;
  }
  replacement += '  ];';

  let content = fs.readFileSync('src/App.tsx', 'utf8');
  // Match the new CarLogos array which is indented and uses 'svg: <svg...'
  content = content.replace(/  const CarLogos = \[\s*\{ name: "Audi", svg: [\s\S]*?\];/m, replacement);
  
  fs.writeFileSync('src/App.tsx', content);
  console.log('updated App.tsx');
}
update().catch(console.error);
