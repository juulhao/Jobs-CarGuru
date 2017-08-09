	function returnsAuthentication(token) {
		alert(token);
	}

	function requestAuthentication() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		if (/android/i.test(userAgent)) {
			try {
				makeLoginInvoke();
			}
			catch (err) {
				//Tratar erro
			}
		} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			try {
				makeLoginInvoke();
			}
			catch (err) {
				//Tratar erro
			}
		} else {
			//Se for navegador normal
		}
    };
    requestAuthentication();
    