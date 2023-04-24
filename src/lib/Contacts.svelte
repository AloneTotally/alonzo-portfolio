<script>
	let hoverBool = {
		Github: false,
		Linkedin: false,
		Email: false
	};
</script>

<div class="flex flex-col justify-evenly bg-slate-950 contacts-wrapper mt-10">
	<div class="text-white flex flex-col items-center text-lg scroll-mt-10" id="Contacts">
		<h2 class="font-extrabold text-4xl mt-10">My contacts</h2>
		<span class="text-slate-400">Where you can find me at</span>
	</div>
	<div class="flex mt-10 justify-evenly mb-10">
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<a
			href="https://github.com/AloneTotally"
			target="_blank"
			rel="noreferrer"
			class="flex justify-center items-center gap-3 hover:text-indigo-500 transition-colors duration-300"
			on:mouseover={() => (hoverBool['Github'] = true)}
			on:mouseleave={() => (hoverBool['Github'] = false)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48"
				width="48"
				viewBox="-6.39108 -10.38875 55.38936 62.3325"
			>
				<g fill={hoverBool['Github'] ? '#6366f1' : '#fff'} class="transition-colors duration-300">
					<path
						d="M21.3035 0C9.5395 0 0 9.5373 0 21.3035c0 9.4122 6.1041 17.3976 14.5687 20.2146 1.0646.1972 1.4555-.4622 1.4555-1.0249 0-.5076-.0198-2.1861-.0289-3.9662-5.9266 1.2887-7.1772-2.5136-7.1772-2.5136-.9691-2.462-2.3654-3.1171-2.3654-3.1171-1.9329-1.3222.1457-1.295.1457-1.295 2.1392.1502 3.2656 2.1956 3.2656 2.1956 1.9001 3.2565 4.9837 2.315 6.1994 1.7706.1916-1.3765.7433-2.3167 1.3526-2.8487-4.7319-.5383-9.706-2.3653-9.706-10.5283 0-2.3255.8322-4.2259 2.195-5.7178-.2212-.537-.9504-2.7037.2067-5.638 0 0 1.789-.5723 5.8596 2.184 1.6994-.472 3.5218-.7088 5.3323-.7172 1.8104.008 3.6343.2451 5.3368.7172 4.0661-2.7563 5.8526-2.184 5.8526-2.184 1.1596 2.9343.4304 5.101.2092 5.638 1.366 1.4919 2.1921 3.3923 2.1921 5.7178 0 8.1827-4.9837 9.984-9.7275 10.5114.7642.6611 1.445 1.9576 1.445 3.9451 0 2.8505-.0243 5.1446-.0243 5.8462 0 .5673.3831 1.2316 1.463 1.0224 8.4603-2.8201 14.5566-10.8028 14.5566-20.212C42.6071 9.5372 33.0691 0 21.3036 0"
						fill-rule="evenodd"
					/>
					<path
						d="M8.0689 30.587c-.047.1061-.2135.1379-.3651.0649-.155-.0695-.2413-.2138-.1913-.32.046-.1087.2124-.139.367-.0663.1545.0695.2426.2152.1894.3214m.863.9625c-.1016.0942-.3006.0504-.435-.0984-.1397-.1485-.1655-.3475-.0624-.4427.1048-.0942.2974-.0501.4367.0984.1397.1503.1669.3475.0607.4427m.8399 1.2268c-.1305.091-.3443.006-.4763-.1834-.1305-.1898-.1305-.417.003-.508.132-.091.3426-.009.4763.1788.1302.1926.1302.4198-.003.5126m1.1506 1.1855c-.1167.1287-.3654.0942-.5475-.0815-.1862-.1718-.238-.4156-.1213-.5444.1185-.129.3686-.0928.552.0815.185.1715.241.417.1168.5444m1.5876.6882c-.052.167-.291.2424-.5324.1715-.241-.073-.3986-.268-.35-.4367.0502-.1683.2908-.247.5338-.1711.2406.0727.3987.2667.3486.4364m1.7435.1275c.006.1757-.1986.3214-.4519.3245-.2547.006-.461-.1365-.4639-.3094 0-.1774.2004-.3213.4547-.326.2533-.005.4611.1366.4611.3109m1.6223-.276c.0303.171-.1457.3471-.3972.394-.2473.0455-.4763-.0607-.5077-.2303-.0307-.1757.1482-.3517.3955-.3972.2519-.0437.4773.0593.5094.2335"
					/>
				</g>
			</svg>
			<p class="text-lg font-bold">Github</p>
		</a>
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<a
			href="https://www.linkedin.com/in/alonzo-puah-b81370227/"
			target="_blank"
			rel="noreferrer"
			class="flex justify-center items-center gap-3 hover:text-indigo-500 transition-colors duration-300"
			on:mouseover={() => (hoverBool['Linkedin'] = true)}
			on:mouseleave={() => (hoverBool['Linkedin'] = false)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				viewBox="0,0,256,256"
				width="48px"
				height="48px"
				fill-rule="nonzero"
				><g
					class="transition-colors duration-300"
					fill={hoverBool['Linkedin'] ? '#6366f1' : '#fff'}
					fill-rule="nonzero"
					stroke="none"
					stroke-width="1"
					stroke-linecap="butt"
					stroke-linejoin="miter"
					stroke-miterlimit="10"
					stroke-dasharray=""
					stroke-dashoffset="0"
					font-family="none"
					font-weight="none"
					font-size="none"
					text-anchor="none"
					style="mix-blend-mode: normal"
				>
					<g transform="scale(5.33333,5.33333)">
						<path
							d="M11.5,6c-3.01977,0 -5.5,2.48023 -5.5,5.5v25c0,3.01977 2.48023,5.5 5.5,5.5h25c3.01977,0 5.5,-2.48023 5.5,-5.5v-25c0,-3.01977 -2.48023,-5.5 -5.5,-5.5zM11.5,9h25c1.39823,0 2.5,1.10177 2.5,2.5v25c0,1.39823 -1.10177,2.5 -2.5,2.5h-25c-1.39823,0 -2.5,-1.10177 -2.5,-2.5v-25c0,-1.39823 1.10177,-2.5 2.5,-2.5zM15.5,13c-1.38071,0 -2.5,1.11929 -2.5,2.5c0,1.38071 1.11929,2.5 2.5,2.5c1.38071,0 2.5,-1.11929 2.5,-2.5c0,-1.38071 -1.11929,-2.5 -2.5,-2.5zM14,20c-0.553,0 -1,0.447 -1,1v13c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-13c0,-0.553 -0.447,-1 -1,-1zM21,20c-0.553,0 -1,0.447 -1,1v13c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-7.5c0,-1.379 1.121,-2.5 2.5,-2.5c1.379,0 2.5,1.121 2.5,2.5v7.5c0,0.553 0.447,1 1,1h3c0.553,0 1,-0.447 1,-1v-8c0,-3.309 -2.691,-6 -6,-6c-1.538,0 -2.937,0.58602 -4,1.54102v-0.54102c0,-0.553 -0.447,-1 -1,-1z"
						/>
					</g>
				</g>
			</svg>
			<p class="text-lg font-bold">Linkedin</p>
		</a>
		<!-- svelte-ignore a11y-mouse-events-have-key-events -->
		<a
			href="mailto:alonzothenoob@gmail.com"
			target="_blank"
			rel="noreferrer"
			class="flex justify-center items-center gap-5 hover:text-indigo-500 transition-colors duration-300"
			on:mouseover={() => (hoverBool['Email'] = true)}
			on:mouseleave={() => (hoverBool['Email'] = false)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				fill={hoverBool['Email'] ? '#6366f1' : '#fff'}
				class="transition-colors duration-300"
				height="48px"
				width="48px"
				version="1.1"
				id="Capa_1"
				viewBox="0 0 75.294 75.294"
				xml:space="preserve"
			>
				<g>
					<path
						d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9   c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089   H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065   c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016   c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102   c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069   c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"
					/>
				</g>
			</svg>
			<p class="text-lg font-bold">alonzothenoob@gmail.com</p>
		</a>
	</div>
</div>

<style>
	.contacts-wrapper {
		width: calc(100%);
	}
</style>
