let imgs = document.getElementsByTagName("img");
let srcs = []
srcs.push('https://thumbs.gfycat.com/LawfulAnchoredIsabellineshrike-size_restricted.gif')
srcs.push('https://media.tenor.com/images/417a1e10300848c69abb9663124d3f68/tenor.gif')
srcs.push('https://thumbs.gfycat.com/DelightfulFittingHarrierhawk-size_restricted.gif')

for (var i = 0, l = imgs.length; i < l; i++) {
	imgs[i].src = srcs[Math.floor(Math.random() * 3)]
}