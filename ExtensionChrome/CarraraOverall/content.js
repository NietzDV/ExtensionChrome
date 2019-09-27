let imgs = document.getElementsByTagName("img");
let srcs = [
	'http://s2.glbimg.com/duFciYmoS0ZgmGyFqv5M59_pNPo=/s.glbimg.com/et/pr/f/original/2014/09/08/179241.jpg',
	'https://www.hypeness.com.br/wp-content/uploads/2019/07/Pedro-Cardoso-Agostinho-Carrara-1-1.jpg',
	'https://amazonas1.com.br/wp-content/uploads/2019/07/Agostinho-carrara-pedro-cardoso.jpeg',
	'https://img.buzzfeed.com/buzzfeed-static/static/2018-07/24/13/asset/buzzfeed-prod-web-01/sub-buzz-490-1532452664-1.jpg?crop=862%3A1067%3B642%2C0&downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*',
	'data:image/jpeg;base64,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',
	'https://pbs.twimg.com/profile_images/471071655/agostinho_400x400.jpg',
	'https://www.google.com/search?client=firefox-b-d&biw=1366&bih=685&tbm=isch&sxsrf=ACYBGNSs8xk1B6UBmfDpFv-VigTnIy0vig%3A1569592536933&sa=1&ei=2BSOXevNOOqe5OUP2LChkAc&q=agostinho+carrara&oq=agostinho+&gs_l=img.3.1.35i39j0i67j0l7j0i67.1874.3402..5238...0.0..0.184.1589.0j10......0....1..gws-wiz-img.3xPKzzdu79s#imgrc=Bgg-ruoxFOvHfM:',
	'https://media.tenor.com/images/e1162e732fd953da6829fff5ea7cbf14/tenor.gif'
]

for (var i = 0, l = imgs.length; i < l; i++) {
	imgs[i].src = srcs[Math.floor(Math.random() * 3)]
}