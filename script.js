/*
 * CATÁLOGO Y CONTACTO
 * PXV_DATA guarda los nueve paquetes que muestra la página. Cada objeto contiene
 * id, nombre, ubicación, categoría, duración, precio referencial, imagen, descripción
 * y listas para los detalles. La imagen se lee más abajo desde la tarjeta HTML.
 * La configuración de contacto está vacía: no se inventan teléfonos ni correos.
 */
// Si agregas el número real, escríbelo con el código internacional del país.
window.PXV_DATA = {"packages":[{"id":"machu-picchu","name":"Machu Picchu: la ciudadela inca","location":"Cusco, Perú","category":"Cultura","days":4,"nights":3,"price":1290,"image":"","image_alt":"Vista panorámica de Machu Picchu entre montañas","description":"Una propuesta para descubrir Cusco y la ciudadela de Machu Picchu con tiempo para caminar, conocer su historia y disfrutar el paisaje andino.","included":["Traslados turísticos indicados","Alojamiento referencial por 3 noches","Orientación de guía local","Desayunos según el alojamiento"],"excluded":["Vuelos a Cusco","Almuerzos y cenas no indicados","Entradas sujetas a disponibilidad","Gastos personales"],"itinerary":["Día 1: llegada y recorrido libre por Cusco.","Día 2: visita guiada propuesta a Machu Picchu.","Día 3: tiempo libre o actividad opcional.","Día 4: salida y retorno."],"recommendations":["Reserva las entradas con anticipación.","Lleva documento de identidad y protección solar.","Considera aclimatarte antes de las excursiones."]},{"id":"valle-sagrado","name":"Valle Sagrado de los Incas","location":"Urubamba, Cusco","category":"Cultura","days":3,"nights":2,"price":890,"image":"","image_alt":"Paisaje de montañas y terrazas en el Valle Sagrado","description":"Un recorrido pausado por paisajes del valle, pueblos andinos y sitios arqueológicos emblemáticos de Cusco.","included":["Transporte turístico compartido","Alojamiento referencial por 2 noches","Guía para el recorrido indicado","Desayunos según el alojamiento"],"excluded":["Vuelos y traslados no indicados","Boleto turístico y entradas","Comidas no indicadas","Gastos personales"],"itinerary":["Día 1: llegada y traslado a Urubamba.","Día 2: recorrido propuesto por pueblos y sitios del valle.","Día 3: mañana libre y retorno a Cusco."],"recommendations":["Lleva una casaca ligera y calzado cómodo.","Consulta qué entradas requiere el recorrido.","Hidrátate durante las visitas."]},{"id":"montana-siete-colores","name":"Montaña de 7 Colores","location":"Cordillera Vilcanota, Cusco","category":"Aventura","days":3,"nights":2,"price":590,"image":"","image_alt":"Franjas de colores de la montaña Vinicunca en Cusco","description":"Una escapada de altura para contemplar Vinicunca y sus franjas minerales, con una jornada de caminata y vistas de la cordillera.","included":["Transporte turístico compartido","Orientación de guía local","Desayuno y refrigerio de ruta referenciales","Alojamiento por 2 noches"],"excluded":["Caballo de apoyo opcional","Entradas locales","Equipo personal de caminata","Gastos médicos o personales"],"itinerary":["Día 1: llegada a Cusco y descanso de aclimatación.","Día 2: caminata propuesta a Vinicunca y retorno a Cusco.","Día 3: mañana libre y salida."],"recommendations":["Aclimátate varios días antes de la caminata.","Lleva abrigo, agua y protección solar.","Consulta con un profesional si tienes una condición médica."]},{"id":"lago-titicaca","name":"Lago Titicaca y cultura viva","location":"Puno, Perú","category":"Naturaleza","days":3,"nights":2,"price":760,"image":"","image_alt":"Amanecer sobre el lago Titicaca en Puno","description":"Una visita a las aguas altas del Titicaca y a comunidades isleñas, combinando paisaje, navegación y expresiones culturales.","included":["Alojamiento referencial por 2 noches","Traslado al puerto indicado","Paseo en lancha compartida","Orientación durante la visita"],"excluded":["Transporte hasta Puno","Tasas de embarque","Comidas no indicadas","Consumos en las islas"],"itinerary":["Día 1: llegada a Puno y descanso.","Día 2: navegación y visita propuesta a islas del lago.","Día 3: mañana libre y salida."],"recommendations":["Lleva ropa abrigadora para la mañana y la noche.","Ten en cuenta la altitud de Puno.","Pregunta antes de fotografiar a residentes."]},{"id":"canon-colca","name":"Arequipa y Cañón del Colca","location":"Arequipa, Perú","category":"Naturaleza","days":3,"nights":2,"price":840,"image":"","image_alt":"Paisaje del Cañón del Colca en Arequipa","description":"Una ruta entre volcanes y pueblos del valle hasta los miradores del Colca, con espacios para conocer Arequipa.","included":["Transporte turístico compartido","Alojamiento referencial por 2 noches","Orientación de guía local","Desayuno según el alojamiento"],"excluded":["Boleto turístico del Colca","Vuelos y comidas no indicados","Actividades opcionales","Gastos personales"],"itinerary":["Día 1: llegada y paseo libre por Arequipa.","Día 2: ruta propuesta hacia el valle y sus miradores.","Día 3: regreso a Arequipa y salida."],"recommendations":["Lleva abrigo y protección solar.","Consulta los tiempos de traslado por carretera.","Mantén distancia de la fauna silvestre."]},{"id":"iquitos-amazonas","name":"Iquitos y río Amazonas","location":"Loreto, Perú","category":"Naturaleza","days":4,"nights":3,"price":1490,"image":"","image_alt":"Bosque de la Amazonía peruana cerca de Iquitos","description":"Una experiencia de selva para explorar los alrededores de Iquitos, navegar por el Amazonas y observar el entorno natural.","included":["Alojamiento referencial por 3 noches","Traslados fluviales indicados","Orientación de guía local","Alimentación según itinerario final"],"excluded":["Vuelos a Iquitos","Vacunas o medicación","Bebidas y consumos personales","Actividades no indicadas"],"itinerary":["Día 1: llegada a Iquitos y traslado.","Día 2: navegación y recorrido natural propuesto.","Día 3: actividad de observación y tiempo libre.","Día 4: retorno a Iquitos y salida."],"recommendations":["Lleva repelente y ropa fresca de manga larga.","Usa calzado cerrado y protección contra la lluvia.","Sigue siempre las indicaciones del guía."]},{"id":"lima-city-tour","name":"Lima: historia y sabores","location":"Lima, Perú","category":"Turismo tradicional","days":2,"nights":1,"price":490,"image":"","image_alt":"Plaza histórica del centro de Lima","description":"Una introducción a Lima con un paseo por el centro histórico y tiempo para explorar la gastronomía y los barrios costeros.","included":["Alojamiento referencial por 1 noche","Recorrido guiado por el centro histórico","Traslado turístico durante el recorrido","Desayuno según el alojamiento"],"excluded":["Vuelos y traslados desde el aeropuerto","Almuerzos y cenas","Entradas a museos","Gastos personales"],"itinerary":["Día 1: recorrido histórico propuesto y tarde libre.","Día 2: mañana libre y salida."],"recommendations":["Usa calzado cómodo para caminar.","Verifica horarios de museos y espacios culturales.","Cuida tus pertenencias en zonas concurridas."]},{"id":"paracas-huacachina","name":"Paracas y oasis de Huacachina","location":"Ica, Perú","category":"Aventura","days":3,"nights":2,"price":790,"image":"","image_alt":"Costa desértica de la Reserva Nacional de Paracas","description":"Un contraste de costa y desierto que conecta la Reserva de Paracas con el oasis y las dunas de Huacachina.","included":["Transporte turístico compartido","Alojamiento referencial por 2 noches","Orientación durante las visitas indicadas","Desayunos según el alojamiento"],"excluded":["Impuestos y entradas a reservas","Paseo en buggy opcional","Comidas no indicadas","Gastos personales"],"itinerary":["Día 1: llegada a Paracas y paseo libre.","Día 2: visita propuesta a la reserva y traslado a Huacachina.","Día 3: mañana en el oasis y retorno."],"recommendations":["Lleva agua, sombrero y protector solar.","Confirma condiciones del mar y del desierto.","Usa operadores autorizados para actividades de aventura."]},{"id":"tambopata","name":"Tambopata: bosque y río","location":"Puerto Maldonado, Perú","category":"Naturaleza","days":5,"nights":4,"price":1690,"image":"","image_alt":"Bosque tropical de la Amazonía peruana","description":"Una propuesta de naturaleza en el bosque amazónico de Tambopata, con navegación y caminatas acompañadas por guía.","included":["Alojamiento referencial por 4 noches","Traslado fluvial indicado","Orientación de guía local","Comidas según itinerario final"],"excluded":["Vuelos a Puerto Maldonado","Tasas de ingreso a reservas","Bebidas y consumos personales","Equipo personal"],"itinerary":["Día 1: llegada y traslado al alojamiento.","Día 2: caminata interpretativa y observación de naturaleza.","Día 3: navegación y actividad propuesta.","Día 4: caminata de observación y tiempo libre.","Día 5: retorno a Puerto Maldonado y salida."],"recommendations":["Lleva repelente, impermeable y ropa de manga larga.","Usa calzado apropiado para senderos húmedos.","Respeta la fauna y no dejes residuos."]}],"contact":{"agency":"Rumbo Perú","whatsapp":"","email":"","location":"","instagram":"","facebook":""}};

/*
 * DATOS DE LA PÁGINA: PXV_DATA contiene los nueve paquetes y la configuración
 * de contacto. Cada paquete tiene identificador, nombre, ubicación, categoría,
 * duración, precio referencial, descripción y listas para la ventana de detalles.
 * La ruta de imagen se obtiene después de la tarjeta HTML; teléfono y correo
 * están vacíos hasta que se configuren datos reales de la agencia.
 */
// El número de WhatsApp, si se configura, debe ser el real y llevar código de país.

/* INICIO Y CONFIGURACIÓN DEL PROGRAMA */
// Esta función autoejecutable crea un ámbito privado para sus variables.
// Así, nombres como "cart" o "contact" no se mezclan con otros scripts.
(function () {
	// Activa el modo estricto para ayudar al navegador a detectar errores de código.
	'use strict';

	// Comprueba que existan los datos que la página necesita y que packages sea un arreglo.
	if (!window.PXV_DATA || !Array.isArray(window.PXV_DATA.packages)) {
		// Informa en la consola si falta el catálogo y detiene este archivo.
		console.error('No se pudieron cargar los datos de paquetes turísticos.');
		// return termina la función autoejecutable para evitar errores posteriores.
		return;
	}

	/* SELECTORES DEL HTML Y ESTADO INTERNO
	 * querySelector devuelve el primer elemento que coincide con un selector CSS;
	 * querySelectorAll devuelve todos. Array.from los convierte a una lista recorrible.
	 * Los atributos data-* conectan botones, tarjetas y contenedores con este script.
	 */
	//-------------//
	// Guarda el catálogo de paquetes publicado al comienzo de este archivo.
	const packages = window.PXV_DATA.packages;
	// Busca todas las tarjetas que tienen el atributo data-package-card.
	const cards = Array.from(document.querySelectorAll('[data-package-card]'));
	// Completa la ruta de imagen de cada paquete leyendo la tarjeta correspondiente.
	packages.forEach((product) => {
		// find devuelve la primera tarjeta cuyo id coincide con el paquete actual.
		const card = cards.find((candidate) => candidate.dataset.id === product.id);
		// Busca la imagen de la tarjeta, o devuelve null si no se encontró la tarjeta.
		const image = card ? card.querySelector('.card-photo img') : null;
		// Lee el atributo src del HTML y lo guarda en el objeto del paquete.
		if (image) product.image = image.getAttribute('src') || '';
	});
	// Map permite buscar rápidamente un paquete usando su id como clave.
	const packageById = new Map(packages.map((item) => [item.id, item]));
	// Lee los datos de contacto; usa un objeto vacío si la configuración no existe.
	const contact = window.PXV_DATA.contact || {};
	// Nombre con el que el carrito se guarda en localStorage.
	const storageKey = 'pxv-travel-reservations-v1';
	// Captura los campos de búsqueda, precio y duración que existen en el HTML.
	const searchInput = document.querySelector('#destination-search');
	const priceInput = document.querySelector('#price-filter');
	const durationInput = document.querySelector('#duration-filter');
	// Captura todos los botones de categoría encontrados en el HTML.
	const categoryButtons = Array.from(document.querySelectorAll('.filter-chip[data-category]'));
	// Captura la ventana de detalles y el contenedor donde se escribe su contenido.
	const dialog = document.querySelector('#package-dialog');
	const dialogContent = document.querySelector('[data-dialog-content]');
	// Captura el panel desplegable del carrito, su fondo y su lista de artículos.
	const drawer = document.querySelector('#cart-drawer');
	const backdrop = document.querySelector('[data-cart-backdrop]');
	const cartItems = document.querySelector('[data-cart-items]');
	const cartEmpty = document.querySelector('[data-cart-empty]');
	// Captura el aviso temporal y los tres elementos que controlan el chat de WhatsApp.
	const toast = document.querySelector('[data-toast]');
	const whatsappChat = document.querySelector('#pxv-whatsapp-chat-panel');
	const whatsappChatToggle = document.querySelector('[data-pxv-chat-toggle]');
	const whatsappChatClose = document.querySelector('[data-pxv-chat-close]');
	// getElementById busca cada campo del formulario por su identificador HTML exacto.
	const contactName = document.getElementById('contact-name');
	const contactEmail = document.getElementById('contact-email');
	const contactPhone = document.getElementById('contact-phone');
	const contactPackage = document.getElementById('contact-package');
	const contactMessage = document.getElementById('contact-message');
	// Identificador que se usa para encontrar el aviso de validación.
	const contactValidationId = 'pxv-contact-validation';
	// Recuerda la categoría activa, inicia sin temporizador y controla doble envío.
	let activeCategory = 'all';
	let toastTimer;
	// En la copia local el formulario se detiene antes de enviar, por eso sigue en false.
	let isSubmittingContact = false;
	// Recupera el carrito guardado; si no había datos, comienza con una lista vacía.
	let cart = loadCart();
	//----------------------------------------------------------------------------------//

	/* FUNCIONES AUXILIARES -----------------------------------------*/
	// escapeHtml recibe un valor y devuelve texto que puede insertarse con seguridad en HTML.
	function escapeHtml(value) {
		// Reemplaza caracteres que el navegador podría interpretar como etiquetas o atributos.
		return String(value).replace(/[&<>"']/g, (character) => ({
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&quot;',
			"'": '&#039;'
		})[character]);
	}

	// normalize recibe texto y devuelve su versión minúscula, sin tildes y sin espacios externos.
	function normalize(value) {
		// NFD separa las tildes de las letras; la expresión regular elimina las marcas.
		return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
	}

	// formatPrice recibe una cantidad y devuelve un texto con moneda soles y formato peruano.
	function formatPrice(value) {
		// Intl.NumberFormat agrega separadores de miles y no muestra decimales.
		return 'S/ ' + new Intl.NumberFormat('es-PE', { maximumFractionDigits: 0 }).format(value);
	}

	// calculateTotal no recibe parámetros y devuelve la suma de precio por cantidad.
	function calculateTotal() {
		// reduce acumula el subtotal de cada línea del carrito partiendo desde cero.
		return cart.reduce((total, item) => {
			// Recupera el paquete completo mediante su id.
			const product = packageById.get(item.id);
			// Si el producto existe, multiplica precio por cantidad; si no, suma cero.
			return total + (product ? product.price * item.quantity : 0);
		}, 0);
	}

	// clearCart vacía el carrito y actualiza el almacenamiento y la interfaz.
	function clearCart() {
		// No hace nada si ya no quedan paquetes.
		if (!cart.length) return;
		// Sustituye el estado actual por un arreglo vacío.
		cart = [];
		// Guarda el cambio, actualiza el HTML y muestra un aviso.
		saveCart();
		renderCart();
		showToast('Se vació tu reserva.');
	}

	// addToCart recibe un identificador y devuelve true si logró agregar una unidad.
	function addToCart(id) {
		// has confirma que el id pertenece al catálogo válido.
		if (!packageById.has(id)) return false;

		// some recorre el arreglo y devuelve true si ese paquete ya está en el carrito.
		const alreadyAdded = cart.some((item) => item.id === id);
		if (alreadyAdded) {
			// find obtiene la línea existente para aumentar su cantidad y evitar duplicarla.
			const item = cart.find((entry) => entry.id === id);
			// Limita cada paquete a 20 unidades.
			if (item.quantity >= 20) {
				showToast('Puedes agregar hasta 20 unidades de cada paquete.');
				// false avisa al evento que no se pudo añadir otra unidad.
				return false;
			}
			// Suma una unidad a la cantidad existente.
			item.quantity += 1;
		} else {
			// Si no existía, agrega una línea nueva con cantidad inicial de uno.
			cart.push({ id, quantity: 1 });
		}

		// Persiste el nuevo carrito y actualiza los elementos visuales.
		saveCart();
		renderCart();
		// true confirma al código que llamó esta función que sí se agregó.
		return true;
	}

	// removeFromCart recibe un id y quita del arreglo la línea de ese paquete.
	function removeFromCart(id) {
		// some evita actualizar la vista si el paquete no estaba en el carrito.
		if (!cart.some((item) => item.id === id)) return;
		// filter crea un arreglo nuevo con todos los paquetes menos el id indicado.
		cart = cart.filter((item) => item.id !== id);
		// Guarda y vuelve a dibujar el carrito.
		saveCart();
		renderCart();
	}

	// changeCartQuantity recibe el id del paquete y un cambio permitido: -1 o +1.
	function changeCartQuantity(id, amount) {
		// Comprueba que exista la línea y que el cambio esté dentro de los dos valores permitidos.
		const itemExists = cart.some((item) => item.id === id);
		if (!itemExists || ![-1, 1].includes(amount)) return;

		// find devuelve la línea del paquete que se va a modificar.
		const item = cart.find((entry) => entry.id === id);
		// Si la resta llega a cero, elimina el paquete y termina la función.
		if (item.quantity + amount <= 0) {
			removeFromCart(id);
			return;
		}

		// Math.min calcula el menor valor y asegura que la cantidad no supere 20.
		item.quantity = Math.min(item.quantity + amount, 20);
		// Guarda y presenta la cantidad actualizada.
		saveCart();
		renderCart();
	}

	// showToast recibe el mensaje que se debe mostrar temporalmente al visitante.
	function showToast(message) {
		// Si el HTML no tiene un aviso, no hay nada que actualizar.
		if (!toast) return;
		// textContent coloca texto sin interpretarlo como código HTML.
		toast.textContent = message;
		// is-visible es la clase CSS que hace aparecer el aviso.
		toast.classList.add('is-visible');
		// Cancela el temporizador anterior para dar al nuevo aviso el tiempo completo.
		window.clearTimeout(toastTimer);
		// Tras 2800 milisegundos, quita la clase CSS y oculta el aviso.
		toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2800);
	}
//-------------------------------------------------------------------------//
	// loadCart no recibe parámetros y devuelve solo las líneas válidas guardadas.
	function loadCart() {
		// saved recibirá el arreglo ya convertido desde el texto JSON.
		let saved;
		try {
			// localStorage guarda datos en el navegador; getItem lee el carrito por su clave.
			const storedCart = window.localStorage.getItem(storageKey);
			// Sin datos previos devuelve una lista vacía.
			if (!storedCart) return [];
			// JSON.parse reconstruye el arreglo desde la cadena guardada.
			saved = JSON.parse(storedCart);
		} catch (error) {
			// Captura problemas del almacenamiento o del formato JSON y los informa.
			console.error('No se pudo recuperar la reserva guardada.', error);
			showToast('No se pudo recuperar la reserva guardada en este navegador.');
			// Devuelve un valor inicial seguro para que la página pueda continuar.
			return [];
		}

		// Rechaza datos guardados que no sean un arreglo.
		if (!Array.isArray(saved)) {
			console.error('Los datos guardados de la reserva no tienen el formato esperado.');
			showToast('La reserva guardada no tiene un formato válido.');
			return [];
		}

		// filter conserva solo productos existentes con cantidades enteras mayores que cero.
		const validItems = saved.filter((item) => item && packageById.has(item.id) && Number.isInteger(item.quantity) && item.quantity > 0);
		// Avisa si se encontraron y descartaron líneas dañadas o desconocidas.
		if (validItems.length !== saved.length) {
			showToast('Se omitieron elementos no válidos de la reserva guardada.');
		}
		// map limpia cada objeto y Math.min limita cantidades guardadas a 20.
		return validItems.map((item) => ({ id: item.id, quantity: Math.min(item.quantity, 20) }));
	}

	// saveCart no devuelve un valor; convierte el carrito a texto y lo guarda localmente.
	function saveCart() {
		try {
			// JSON.stringify convierte el arreglo a texto antes de almacenarlo.
			window.localStorage.setItem(storageKey, JSON.stringify(cart));
		} catch (error) {
			// Informa si el navegador bloqueó el almacenamiento.
			console.error('No se pudo guardar la reserva en este navegador.', error);
			showToast('No se pudo guardar la reserva en este navegador.');
		}
	}
//----------------------------------//
	// totalQuantity devuelve la suma del número de unidades, no de tipos de paquete.
	function totalQuantity() {
		// reduce acumula las cantidades de cada línea y comienza en cero.
		return cart.reduce((total, item) => total + item.quantity, 0);
	}

	// renderCart actualiza contadores, importes, estado vacío y líneas del carrito.
	function renderCart() {
		// Calcula la cantidad total de unidades reservadas.
		const count = totalQuantity();
		// querySelectorAll busca los contadores de cabecera y panel; forEach actualiza ambos.
		document.querySelectorAll('[data-cart-count]').forEach((element) => {
			// textContent sustituye el número visible.
			element.textContent = String(count);
		});

		// Busca los importes y calcula el total para mostrarlos con formato de moneda.
		const totalElement = document.querySelector('[data-cart-total]');
		const total = calculateTotal();
		// Comprueba que el nodo existe antes de cambiar su contenido.
		if (totalElement) totalElement.textContent = formatPrice(total);
		const subtotalElement = document.querySelector('[data-cart-subtotal]');
		if (subtotalElement) subtotalElement.textContent = formatPrice(total);
		// hidden muestra el mensaje de carrito vacío solo cuando no hay líneas.
		if (cartEmpty) cartEmpty.hidden = cart.length > 0;
		// El botón para vaciar queda deshabilitado si el carrito no tiene artículos.
		const clearButton = document.querySelector('[data-clear-cart]');
		if (clearButton) clearButton.disabled = cart.length === 0;
		if (cartItems) {
			// map genera un bloque HTML por producto; join los une sin separadores adicionales.
			cartItems.innerHTML = cart.map((item) => {
				// Recupera datos completos del paquete mediante el id guardado en cada línea.
				const product = packageById.get(item.id);
				// Omite una línea si su paquete ya no forma parte del catálogo.
				if (!product) return '';
				// escapeHtml protege valores interpolados en atributos y elementos HTML.
				// data-quantity y data-remove son leídos luego por la delegación de clics.
				return `<article class="cart-item">
					<img src="${escapeHtml(product.image)}" alt="" loading="lazy">
					<div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(product.days + ' días · ' + product.nights + ' noches')}</p><p class="cart-item-price">${formatPrice(product.price)} por persona · subtotal ${formatPrice(product.price * item.quantity)}</p>
					<div class="quantity-controls" aria-label="Cantidad de ${escapeHtml(product.name)}"><button type="button" data-quantity="${escapeHtml(item.id)}" data-delta="-1" aria-label="Disminuir cantidad">−</button><span>${item.quantity}</span><button type="button" data-quantity="${escapeHtml(item.id)}" data-delta="1" aria-label="Aumentar cantidad">+</button></div></div>
					<button class="remove-item" type="button" data-remove="${escapeHtml(item.id)}" aria-label="Eliminar ${escapeHtml(product.name)}">Quitar</button>
				</article>`;
			}).join('');
		}
	}

	/* BÚSQUEDA Y FILTROS
	 * La búsqueda se aplica primero al texto y luego los filtros de categoría,
	 * precio y duración. filter conserva solo los paquetes que cumplen todo.
	 */
	// searchPackages recibe el término escrito y devuelve los paquetes que coinciden.
	function searchPackages(term) {
		// Normaliza el término para que una búsqueda no dependa de mayúsculas o tildes.
		const query = normalize(term);
		// filter recorre el catálogo y conserva coincidencias parciales de nombre,
		// ubicación o categoría. includes busca el texto en cualquier posición.
		return packages.filter((product) => (
			normalize(product.name).includes(query)
			|| normalize(product.location).includes(query)
			|| normalize(product.category).includes(query)
		));
	}

	// filterPackages no recibe parámetros y devuelve la lista que pasa todos los filtros activos.
	function filterPackages() {
		// Lee el texto, el precio máximo y la duración; usa valores seguros si falta un control.
		const query = searchInput ? searchInput.value : '';
		const maximumPrice = priceInput ? Number(priceInput.value) : Number.POSITIVE_INFINITY;
		const duration = durationInput ? durationInput.value : 'all';
		// Aplica primero la búsqueda de texto al catálogo.
		const matchingSearch = searchPackages(query);

		// Segundo filter combina categoría, precio y duración sobre el resultado de búsqueda.
		return matchingSearch.filter((product) => {
			// Una categoría coincide si se eligió "all" o si es igual a la del paquete.
			const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
			// El precio del paquete debe ser menor o igual al máximo seleccionado.
			const matchesPrice = product.price <= maximumPrice;
			// El rango compara los días de duración con la opción seleccionada.
			const matchesDuration = duration === 'all'
				|| (duration === 'short' && product.days <= 2)
				|| (duration === 'medium' && product.days >= 3 && product.days <= 4)
				|| (duration === 'long' && product.days >= 5);
			// Solo incluye el paquete cuando cumple simultáneamente los tres criterios.
			return matchesCategory && matchesPrice && matchesDuration;
		});
	}

	// applyFilters no recibe parámetros; actualiza las tarjetas y el contador de resultados.
	function applyFilters() {
		// map extrae los ids y Set permite comprobar rápidamente cuáles coinciden.
		const visibleIds = new Set(filterPackages().map((product) => product.id));
		// forEach visita cada tarjeta y hidden la muestra u oculta según su id.
		cards.forEach((card) => {
			card.hidden = !visibleIds.has(card.dataset.id);
		});

		// Busca los textos HTML que muestran cantidad, estado sin resultados y precio máximo.
		const count = document.querySelector('[data-results-count]');
		const empty = document.querySelector('[data-empty-state]');
		const priceLabel = document.querySelector('[data-price-label]');
		// size indica cuántos ids quedaron tras combinar los filtros.
		if (count) count.textContent = String(visibleIds.size);
		// Muestra el mensaje vacío solo si no existe ninguna coincidencia.
		if (empty) empty.hidden = visibleIds.size > 0;
		// Actualiza la etiqueta con el valor actual del control deslizante.
		if (priceLabel && priceInput) priceLabel.textContent = formatPrice(Number(priceInput.value));
	}

	// showDetails recibe el id seleccionado y abre una ventana con los datos de ese paquete.
	function showDetails(id) {
		// Map.get devuelve el objeto del paquete; se verifica que existan también los nodos HTML.
		const product = packageById.get(id);
		if (!product || !dialog || !dialogContent) return;
		// list recibe una lista de textos y devuelve elementos <li> protegidos para HTML.
		const list = (items) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');
		// Inserta datos del paquete actual, incluidos itinerario, incluidos y recomendaciones.
		// No reutiliza texto de otra tarjeta; escapeHtml protege los valores variables.
		dialogContent.innerHTML = `<img class="dialog-hero" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.image_alt)}">
			<div class="dialog-body"><p class="eyebrow">${escapeHtml(product.category)} · ${escapeHtml(product.location)}</p>
			<h2 id="dialog-title">${escapeHtml(product.name)}</h2><p class="dialog-meta">${escapeHtml(product.days + ' días · ' + product.nights + ' noches')}</p>
			<p class="dialog-price">Desde ${formatPrice(product.price)} <small>por persona · precio ilustrativo</small></p><p class="dialog-description">${escapeHtml(product.description)}</p>
			<div class="dialog-detail-grid"><section><h3>Itinerario sugerido</h3><ul>${list(product.itinerary)}</ul></section><section><h3>Incluye, sujeto a confirmación</h3><ul>${list(product.included)}</ul></section><section><h3>No incluye</h3><ul>${list(product.excluded)}</ul></section><section><h3>Recomendaciones</h3><ul>${list(product.recommendations)}</ul></section></div>
			<div class="dialog-actions"><button class="button button-dark" type="button" data-add="${escapeHtml(product.id)}">Agregar a mi reserva</button><button class="button button-outline js-whatsapp" type="button" data-package="${escapeHtml(product.name)}">Consultar este paquete por WhatsApp</button></div></div>`;
		// showModal abre el elemento <dialog> como ventana modal del navegador.
		dialog.showModal();
	}

	/* APERTURA Y CIERRE DEL CARRITO Y DEL CHAT */
	// openCart abre el panel del carrito si existen el panel y el fondo de la ventana.
	function openCart() {
		if (!drawer || !backdrop) return;
		// is-open es la clase CSS que muestra el panel; inert permite interactuar con él.
		drawer.classList.add('is-open');
		drawer.removeAttribute('inert');
		// Actualiza atributos de accesibilidad y muestra el fondo.
		drawer.setAttribute('aria-hidden', 'false');
		backdrop.hidden = false;
		document.body.classList.add('pxv-cart-open');
		// Enfoca el botón de cerrar para facilitar el uso con teclado.
		const closeButton = drawer.querySelector('[data-close-cart]');
		if (closeButton) closeButton.focus();
	}

	// closeCart cierra el panel, oculta el fondo y bloquea la interacción con su contenido.
	function closeCart() {
		if (!drawer || !backdrop) return;
		// Quita la clase visual, restablece accesibilidad y oculta el fondo.
		drawer.classList.remove('is-open');
		drawer.setAttribute('aria-hidden', 'true');
		drawer.setAttribute('inert', '');
		backdrop.hidden = true;
		document.body.classList.remove('pxv-cart-open');
	}

	// setWhatsAppChatOpen recibe true para abrir el chat o false para cerrarlo.
	function setWhatsAppChatOpen(isOpen) {
		if (!whatsappChat || !whatsappChatToggle) return;
		// toggle pone o quita is-open; esa clase controla la animación definida en CSS.
		whatsappChat.classList.toggle('is-open', isOpen);
		// Actualiza los atributos ARIA para que tecnologías de asistencia conozcan el estado.
		whatsappChat.setAttribute('aria-hidden', String(!isOpen));
		whatsappChatToggle.setAttribute('aria-expanded', String(isOpen));
		if (isOpen) {
			// Al abrir, hace interactivo el panel y enfoca su botón de cerrar.
			whatsappChat.removeAttribute('inert');
			if (whatsappChatClose) whatsappChatClose.focus();
		} else {
			// Al cerrar, vuelve a bloquear el panel y devuelve el foco al botón flotante.
			whatsappChat.setAttribute('inert', '');
			whatsappChatToggle.focus();
		}
	}
//--------------------------------------------------------------//
	// whatsappUrl recibe el texto de consulta y devuelve un enlace wa.me o una cadena vacía.
	function whatsappUrl(message) {
		// El teléfono se configura en contact.whatsapp; se dejan solo sus dígitos para wa.me.
		const phone = String(contact.whatsapp || '').replace(/\D/g, '');
		// Sin teléfono real configurado, no se crea un enlace que pudiera ser incorrecto.
		if (!phone) return '';
		// encodeURIComponent adapta espacios, tildes y signos al parámetro URL.
		return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(message);
	}

	// cartMessage crea el texto de WhatsApp con el detalle del carrito y su total referencial.
	function cartMessage() {
		// map convierte cada línea en nombre, cantidad, precio unitario y subtotal.
		const summary = cart.map((item) => {
			// Busca el paquete para obtener su nombre y precio actuales del catálogo.
			const product = packageById.get(item.id);
			// Si existe, genera el renglón; si no, deja texto vacío para filtrarlo.
			return product ? `- ${product.name} x${item.quantity}: ${formatPrice(product.price)} por persona; subtotal ${formatPrice(product.price * item.quantity)}` : '';
		// filter(Boolean) quita renglones vacíos y join separa los productos con saltos de línea.
		}).filter(Boolean).join('\n');
		// Si hay productos, incorpora el total; si no, devuelve el saludo general.
		return summary
			? `Hola, quisiera consultar disponibilidad y detalles para estos paquetes (precios referenciales):\n${summary}\nTotal referencial: ${formatPrice(calculateTotal())}. Entiendo que esta consulta no confirma una reserva.`
			: 'Hola, Rumbo Perú. Estoy interesado en conocer sus paquetes turísticos. ¿Podrían brindarme información?';
	}

	// handleWhatsApp recibe el botón pulsado y prepara una consulta del paquete o del carrito.
	function handleWhatsApp(button) {
		// Si es el botón de la reserva, incluye el carrito; de lo contrario, nombra el paquete.
		const message = button.matches('[data-package="Mi selección"]') ? cartMessage() : `Hola, quisiera consultar detalles y disponibilidad para ${button.dataset.package || 'un viaje'}. Esta consulta no confirma una reserva.`;
		// Construye el enlace solo si existe un número configurado.
		const url = whatsappUrl(message);
		if (!url) {
			// Informa la configuración pendiente sin abrir una URL inventada.
			showToast('El WhatsApp de la agencia aún no está configurado.');
			return;
		}
		// Abre WhatsApp en otra pestaña sin permitir que esa pestaña controle la original.
		window.open(url, '_blank', 'noopener,noreferrer');
	}

	// updateWhatsAppLinks completa los enlaces de WhatsApp del HTML si hay un número real.
	function updateWhatsAppLinks() {
		// Normaliza el teléfono, igual que whatsappUrl.
		const phone = String(contact.whatsapp || '').replace(/\D/g, '');
		// Sin teléfono configurado conserva enlaces de respaldo y termina.
		if (!phone) return;
		// querySelectorAll encuentra los enlaces y forEach configura cada uno.
		document.querySelectorAll('a.js-whatsapp').forEach((link) => {
			// Prepara un mensaje según el paquete asociado a ese enlace.
			const text = `Hola, quisiera consultar detalles y disponibilidad para ${link.dataset.package || 'un viaje'}. Esta consulta no confirma una reserva.`;
			// Escribe el destino oficial y los atributos seguros de apertura externa.
			link.href = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text);
			link.target = '_blank';
			link.rel = 'noopener noreferrer';
		});
	}
//---------------------------------//
	/* EVENTOS DE LA PÁGINA
	 * addEventListener registra una función que se ejecuta cuando ocurre un evento.
	 * La delegación escucha los clics en document y usa closest para reconocer
	 * botones existentes y también los creados dinámicamente, como los del modal.
	 */
	document.addEventListener('click', (event) => {
		// event.target indica dónde se hizo clic; se comprueba que sea un elemento HTML.
		const target = event.target instanceof Element ? event.target : null;
		// Si el evento no provino de un elemento, termina sin modificar la página.
		if (!target) return;

		// Primer caso: el botón flotante alterna la apertura y el cierre del chat.
		if (target.closest('[data-pxv-chat-toggle]')) {
			// contains comprueba si el panel ya tiene la clase abierta.
			if (whatsappChat) setWhatsAppChatOpen(!whatsappChat.classList.contains('is-open'));
			return;
		}
		// El botón X cierra el chat y termina la gestión de este clic.
		if (target.closest('[data-pxv-chat-close]')) {
			setWhatsAppChatOpen(false);
			return;
		}
		// Al iniciar conversación, usa el carrito si tiene elementos o un saludo general.
		if (target.closest('[data-pxv-chat-start]')) {
			const message = cart.length ? cartMessage() : 'Hola, Rumbo Perú. Estoy interesado en conocer sus paquetes turísticos. ¿Podrían brindarme información?';
			const url = whatsappUrl(message);
			if (!url) {
				// Indica que falta configurar el número y no simula una apertura de WhatsApp.
				showToast('Configura el número internacional de WhatsApp en Ajustes > Viajes antes de iniciar la conversación.');
				return;
			}
			// Abre el enlace oficial wa.me en una pestaña independiente.
			window.open(url, '_blank', 'noopener,noreferrer');
			return;
		}

		// Identifica botones con data-add y agrega el paquete indicado por su atributo.
		const addButton = target.closest('[data-add]');
		if (addButton) {
			// addToCart devuelve false si el id no existe o se alcanzó el límite.
			const added = addToCart(addButton.dataset.add);
			if (!added) return;
			// Confirma visualmente la adición y cierra el modal si estaba abierto.
			showToast('Paquete agregado a tu reserva.');
			if (dialog && dialog.open) dialog.close();
			return;
		}

		// Identifica botones de detalles y abre la ventana del id correspondiente.
		const detailsButton = target.closest('[data-details]');
		if (detailsButton) {
			showDetails(detailsButton.dataset.details);
			return;
		}

		// Abre el panel cuando se pulsa el botón Mi carrito.
		if (target.closest('[data-open-cart]')) {
			openCart();
			return;
		}
		// Cierra el carrito desde su botón o cuando se pulsa el fondo oscuro.
		if (target.closest('[data-close-cart]') || target === backdrop) {
			closeCart();
			return;
		}
		// Vacía el carrito mediante el botón que lleva data-clear-cart.
		if (target.closest('[data-clear-cart]')) {
			clearCart();
			return;
		}

		// Los botones de cantidad traen el id y el cambio (+1 o -1) como data-*.
		const quantityButton = target.closest('[data-quantity]');
		if (quantityButton) {
			// Number convierte el texto de data-delta en número antes de operar.
			changeCartQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.delta));
			return;
		}

		// El botón Quitar identifica la línea que debe borrarse.
		const removeButton = target.closest('[data-remove]');
		if (removeButton) {
			removeFromCart(removeButton.dataset.remove);
			return;
		}

		// Los destinos sugeridos escriben su primera ubicación en el buscador y filtran.
		const destinationButton = target.closest('[data-destination-search]');
		if (destinationButton && searchInput) {
			// split separa ciudad y país por coma; se utiliza la primera parte.
			searchInput.value = destinationButton.dataset.destinationSearch.split(',')[0];
			applyFilters();
			// Desplaza la página hasta el catálogo para mostrar los resultados.
			document.querySelector('#paquetes').scrollIntoView({ behavior: 'smooth' });
			return;
		}

		// Los enlaces ya son enlaces HTML; handleWhatsApp atiende solo botones, no <a>.
		const whatsappButton = target.closest('.js-whatsapp');
		if (whatsappButton && whatsappButton.tagName !== 'A') {
			handleWhatsApp(whatsappButton);
			return;
		}

		// El botón X cierra el diálogo de detalles.
		if (target.closest('[data-close-dialog]') && dialog) dialog.close();
	});

	// Escucha Escape para cerrar el chat cuando está abierto.
	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape' && whatsappChat && whatsappChat.classList.contains('is-open')) {
			setWhatsAppChatOpen(false);
		}
	});

	// Cada botón de categoría recibe un evento click.
	categoryButtons.forEach((button) => {
		button.addEventListener('click', () => {
			// Lee data-category del botón pulsado y la guarda como categoría activa.
			activeCategory = button.dataset.category;
			// Actualiza la clase visual en todos los botones y vuelve a filtrar.
			categoryButtons.forEach((item) => item.classList.toggle('is-active', item === button));
			applyFilters();
		});
	});

	// input filtra mientras se escribe o se mueve el control de precio.
	if (searchInput) searchInput.addEventListener('input', applyFilters);
	if (priceInput) priceInput.addEventListener('input', applyFilters);
	// change actualiza la duración cuando el visitante elige una opción.
	if (durationInput) durationInput.addEventListener('change', applyFilters);

	// Captura el formulario de búsqueda que está en la portada.
	const searchForm = document.querySelector('#destination-search-form');
	// submit ocurre al pulsar «Buscar viajes» o presionar Enter.
	if (searchForm) searchForm.addEventListener('submit', (event) => {
		// preventDefault evita recargar la página al enviar una búsqueda.
		event.preventDefault();
		// Aplica los filtros y lleva al visitante al listado de paquetes.
		applyFilters();
		document.querySelector('#paquetes').scrollIntoView({ behavior: 'smooth' });
	});

	// Captura el botón que devuelve los controles y categoría a su estado inicial.
	const clearFilters = document.querySelector('[data-clear-filters]');
	if (clearFilters) clearFilters.addEventListener('click', () => {
		// Borra el texto, restaura el precio máximo y reinicia la duración.
		if (searchInput) searchInput.value = '';
		if (priceInput) priceInput.value = priceInput.max;
		if (durationInput) durationInput.value = 'all';
		// Vuelve a seleccionar «Todos» y actualiza las clases visuales.
		activeCategory = 'all';
		categoryButtons.forEach((item) => item.classList.toggle('is-active', item.dataset.category === 'all'));
		applyFilters();
	});

	/* MENÚ RESPONSIVE
	 * El botón y la clase is-open se conectan con reglas de style.css que
	 * muestran u ocultan la navegación en pantallas pequeñas.
	 */
	const menuToggle = document.querySelector('.menu-toggle');
	const nav = document.querySelector('#primary-nav');
	if (menuToggle && nav) {
		// click alterna la clase CSS del menú y mantiene actualizado aria-expanded.
		menuToggle.addEventListener('click', () => {
			const isOpen = nav.classList.toggle('is-open');
			menuToggle.setAttribute('aria-expanded', String(isOpen));
			menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
		});
		// Al elegir un enlace de navegación, cierra el menú desplegable.
		nav.addEventListener('click', (event) => {
			// closest reconoce el enlace aunque el clic haya sido en un elemento dentro del enlace.
			if (event.target.closest('a')) {
				nav.classList.remove('is-open');
				menuToggle.setAttribute('aria-expanded', 'false');
				menuToggle.setAttribute('aria-label', 'Abrir menú');
			}
		});
	}
//--------------------------------------------------------------------------------//
	/* VALIDACIÓN DEL FORMULARIO
	 * Este formulario pertenece a la copia estática: se comprueban los campos,
	 * pero se cancela el envío porque esta carpeta no tiene un servidor o servicio
	 * de recepción. Por ello, nunca se presenta un mensaje de envío exitoso.
	 */
	const contactForm = document.querySelector('.contact-form');
	if (contactForm) {
		// validateContactForm asigna errores por campo y devuelve true si todo es válido.
		function validateContactForm() {
			if (contactName) {
				// trim quita espacios a los extremos y length permite validar la longitud.
				const nameLength = contactName.value.trim().length;
				// setCustomValidity asigna un mensaje de error o una cadena vacía si es válido.
				contactName.setCustomValidity(nameLength < 2 || nameLength > 100 ? 'Escribe un nombre de entre 2 y 100 caracteres.' : '');
			}
			if (contactEmail) {
				// Limpia espacios y usa la validación nativa del campo type=email.
				const emailValue = contactEmail.value.trim();
				contactEmail.setCustomValidity(!emailValue ? 'Ingresa tu correo electrónico.' : (!contactEmail.validity.valid ? 'Ingresa un correo electrónico válido.' : ''));
			}
			if (contactPhone) {
				// Cuenta los dígitos y comprueba que el resto del teléfono use caracteres permitidos.
				const phoneValue = contactPhone.value.trim();
				const phoneDigits = phoneValue.replace(/\D/g, '');
				const phonePatternMatches = /^\+?[0-9(). -]{7,24}$/.test(phoneValue);
				contactPhone.setCustomValidity(!phonePatternMatches || phoneDigits.length < 7 || phoneDigits.length > 15 ? 'Ingresa un teléfono válido con entre 7 y 15 dígitos.' : '');
			}
			if (contactPackage) {
				// El paquete elegido debe existir en el catálogo, no basta con cualquier texto.
				contactPackage.setCustomValidity(packageById.has(contactPackage.value) ? '' : 'Selecciona uno de los paquetes turísticos.');
			}
			if (contactMessage) {
				// El mensaje debe tener entre 10 y 2000 caracteres, sin contar espacios externos.
				const messageLength = contactMessage.value.trim().length;
				contactMessage.setCustomValidity(messageLength < 10 || messageLength > 2000 ? 'Escribe un mensaje de entre 10 y 2000 caracteres.' : '');
			}
			// checkValidity devuelve true cuando todos los campos son válidos.
			return contactForm.checkValidity();
		}
//------------------------------------//
		// showContactValidation recibe el mensaje y lo escribe en un aviso del formulario.
		function showContactValidation(message) {
			// Busca un aviso previo para actualizarlo en vez de crear duplicados.
			let notice = document.getElementById(contactValidationId);
			if (!notice) {
				// createElement crea el párrafo del aviso cuando aún no existe.
				notice = document.createElement('p');
				// Asigna identificador, clase visual y rol para lectores de pantalla.
				notice.id = contactValidationId;
				notice.className = 'form-notice';
				notice.setAttribute('role', 'alert');
				// appendChild coloca el aviso dentro del formulario.
				contactForm.appendChild(notice);
			}
			// innerText muestra el texto legible sin interpretar código HTML.
			notice.innerText = message;
		}
//--------------------------------------------------------------------------------//
		// input se dispara al escribir: limpia el error personalizado y el aviso anterior.
		contactForm.addEventListener('input', (event) => {
			// Solo limpia validez en campos de formulario, no en otros elementos.
			if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLSelectElement) {
				event.target.setCustomValidity('');
			}
			const notice = document.getElementById(contactValidationId);
			// remove elimina el aviso viejo; el siguiente envío podrá mostrar el nuevo.
			if (notice) notice.remove();
		});
		// change se activa al cambiar una selección; también limpia su mensaje de error.
		contactForm.addEventListener('change', (event) => {
			if (event.target instanceof HTMLSelectElement) event.target.setCustomValidity('');
			const notice = document.getElementById(contactValidationId);
			if (notice) notice.remove();
		});

		// submit se ejecuta al enviar el formulario y aquí se controla toda la validación.
		contactForm.addEventListener('submit', (event) => {
			// Protege frente a envíos repetidos si el estado llegara a estar activo.
			if (isSubmittingContact) {
				// preventDefault evita enviar una segunda vez.
				event.preventDefault();
				return;
			}
			// Si la validación falla, cancela el envío y explica cuál campo revisar.
			if (!validateContactForm()) {
				event.preventDefault();
				// :invalid selecciona el primer campo que el navegador considera inválido.
				const invalidField = contactForm.querySelector(':invalid');
				// Compara el campo inválido y prepara una instrucción sencilla para corregirlo.
				const message = invalidField === contactName
					? 'Revisa el nombre: debe tener entre 2 y 100 caracteres.'
					: (invalidField === contactEmail
						? 'Revisa el correo electrónico e ingresa una dirección válida.'
						: (invalidField === contactPhone
							? 'Revisa el teléfono: debe incluir entre 7 y 15 dígitos.'
							: (invalidField === contactPackage
								? 'Selecciona el paquete turístico de tu interés.'
								: 'Revisa el mensaje: debe tener entre 10 y 2000 caracteres.')));
				showContactValidation(message);
				// reportValidity muestra el aviso nativo del navegador.
				contactForm.reportValidity();
				// Lleva el foco al primer campo inválido para facilitar su corrección.
				if (invalidField) invalidField.focus();
				return;
			}
			// Aunque los campos sean válidos, cancela el envío: no hay receptor configurado.
			event.preventDefault();
			// Advierte explícitamente que validar no significa que los datos se hayan enviado.
			showContactValidation('Los campos son v\u00e1lidos, pero esta copia local no tiene un servicio de recepci\u00f3n configurado. No se envi\u00f3 ning\u00fan dato.');
			// Conserva el rol de alerta para que la advertencia se anuncie accesiblemente.
			const notice = document.getElementById(contactValidationId);
			if (notice) notice.setAttribute('role', 'alert');
		});
	}

	// Al pulsar fuera del contenido, si el destino exacto fue el diálogo, lo cierra.
	if (dialog) {
		dialog.addEventListener('click', (event) => {
			if (event.target === dialog) dialog.close();
		});
	}

	/* ARRANQUE
	 * El script está enlazado con defer, así que el HTML ya se analizó al llegar aquí.
	 * Estas llamadas iniciales configuran WhatsApp, dibujan el carrito y aplican filtros.
	 */
	// Completa enlaces wa.me únicamente si el número real está configurado.
	updateWhatsAppLinks();
	// Dibuja el estado inicial del carrito recuperado desde localStorage.
	renderCart();
	// Presenta las tarjetas y el contador según los controles actuales.
	applyFilters();
}());

