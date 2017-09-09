
interface myImage {
	file: string,
	alt: string,
	title: string
}

export const galleries: { [key: string]: myImage[] } = {
	winners: [
		{
			file: "01_zivaz_burger.jpg",
			alt: "",
			title: "",
		},
		{
			file: "02_zivaz_burger.jpg",
			alt: "",
			title: "",
		},
		{
			file: "03_zivaz_pork_belly_blue.jpg",
			alt: "",
			title: "Pork Belly Tacos",
		},
		{
			file: "04_zivaz_burrito.jpg",
			alt: "",
			title: "",
		},
		{
			file: "05_zivaz_Burrito_Madness_Champion.png",
			alt: "",
			title: "",
		},
	],

	restaurant: [
		{
			file: "01_zivaz_inside.jpg",
			alt: "Interior",
			title: "",
		},
		{
			file: "02_zivaz_inside.jpg",
			alt: "Interior",
			title: "",
		},
		{
			file: "03_zivaz_inside.jpg",
			alt: "Interior",
			title: "",
		},
		{
			file: "04_zivaz_exterior.jpg",
			alt: "Exterior",
			title: "",
		},
		{
			file: "05_zivaz_exterior.jpg",
			alt: "Exterior",
			title: "",
		},
		{
			file: "06_zivaz_patio.jpg",
			alt: "Zivaz Patio",
			title: "",
		},
	],

	favorites: [
		{
			file: "01_zivaz_steak_fajitas.jpg",
			alt: "Steak Fajitas",
			title: "Steak Fajitas",
		},
		{
			file: "02_zivaz_salmon_salad.jpg",
			alt: "Salmon Salad",
			title: "Salmon Salad",
		},
		{
			file: "03_zivaz_pork_belly_burrito.jpg",
			alt: "Pork Belly Burrito",
			title: "Pork Belly Burrito",
		},
		{
			file: "04_zivaz_margarita_de_jamaica.jpg",
			alt: "Margarita de Jamaica",
			title: "Margarita de Jamaica",
		},
		{
			file: "05_zivaz_asada_burger_n_chile_relleno.jpg",
			alt: "Asada Burger and Chile Relleno",
			title: "Asada Burger & Chile Relleno",
		},
		{
			file: "06_zivaz_paella_special_order.jpg",
			alt: "Paella (Special Order)",
			title: "Paella (Special Order)",
		},
		{
			file: "07_zivaz_mini_flautas.jpg",
			alt: "Mini Flautas",
			title: "Mini Flautas",
		},
		{
			file: "08_quesadillas_zivaz.jpg",
			alt: "Quesadillas Zivaz",
			title: "Quesadillas Zivas",
		},
		{
			file: "09_zivaz_carne_asada_plate.jpg",
			alt: "Carne Asada Plate",
			title: "Carne Asada Plate",
		},
	],
}
