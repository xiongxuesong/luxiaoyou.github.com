		(function(){
			var appid = 'cyrvxkG4p',
			conf = 'prod_256f96c4b26693596b1a11764aa99df2';
			var doc = document,
			s = doc.createElement('script'),
			h = doc.getElementsByTagName('head')[0] || doc.head || doc.documentElement;
			s.type = 'text/javascript';
			s.charset = 'utf-8';
			s.src =  'http://assets.changyan.sohu.com/upload/changyan.js?conf='+ conf +'&appid=' + appid;
			h.insertBefore(s,h.firstChild);
			window.SCS_NO_IFRAME = true;
		})()