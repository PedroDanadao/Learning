let original_text = `<a href="anchor_sub_folder/page02.html">Link to page 2</a>`;

let new_text = original_text.replaceAll(`<`, `&lt;`);
new_text = new_text.replaceAll(`>`, `&gt;`);
new_text = `<strong>` + new_text + `</strong>`

console.log(new_text);
