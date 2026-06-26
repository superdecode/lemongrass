export const menuCategories = [
  {
    id: 'ensaladas',
    label: 'Ensaladas',
    eyebrow: 'Fresh start',
    items: [
      {
        id: 'ensalada-papaya',
        name: 'Ensalada de Papaya',
        price: 235,
        description:
          'Fresca ensalada de papaya verde rallada, con camaron y aderezo thai con notas citricas y picante.',
        detail:
          'Crujiente, fresca y ligeramente picante. Un inicio brillante con el balance acido-salado clasico de Tailandia.',
      },
      {
        id: 'ensalada-papaya-mixta',
        name: 'Ensalada Tropical Salsa Tropical',
        price: 350,
        description:
          'Hierbas frescas con camaron, fresa, higo, mango y una salsa fresca.',
        detail:
          'Una ensalada de perfil frutal y aromatico, pensada para una apertura fresca y expresiva.',
      },
      {
        id: 'ensalada-tofu',
        name: 'Ensalada de Toufu',
        price: 210,
        description:
          'Toufu con mezcla de vegetales frescos, hierbas aromaticas y salsa cremosa de alioli.',
        detail:
          'Version vegetal, ligera y aromatica, con textura suave y final cremoso.',
      },
    ],
  },
  {
    id: 'sopas',
    label: 'Sopas',
    eyebrow: 'Broths',
    items: [
      {
        id: 'sopa-tomyam',
        name: 'Sopa Tom Yam Kum (para 2 personas)',
        price: 360,
        description:
          'Tradicional sopa tailandesa de camaron preparada con lemongrass, galanga, chile y lima.',
        detail:
          'Aroma intenso y sabor acido-picante. Caldo expresivo, ideal para compartir.',
      },
      {
        id: 'sopa-coco',
        name: 'Sopa de Leche de Coco (para 2 personas)',
        price: 260,
        description:
          'Suave sopa cremosa de leche de coco con champinion y tomate cherry, aroma fresco.',
        detail:
          'Cremosa, envolvente y fragante, con un perfil amable y especiado.',
      },
    ],
  },
  {
    id: 'entradas',
    label: 'Entradas',
    eyebrow: 'Small plates',
    items: [
      {
        id: 'nuggets-harina',
        name: 'Nachos de Harina',
        price: 80,
        description:
          'Crujientes laminas fritas servidas con salsa orientales para compartir.',
        detail:
          'Snack ligero para botanear y abrir mesa.',
      },
      {
        id: 'rollo-crujiente',
        name: 'Rollo Crujiente de Pollo con Mango',
        price: 230,
        description:
          'Crujiente rollo de pechuga de pollo relleno de mango fresco y salsa agridulce ligeramente picante, cortado en bocados para compartir.',
        detail:
          'Crujiente por fuera, jugoso por dentro y con final tropical.',
      },
      {
        id: 'algas-fritas',
        name: 'Algas Fritas',
        price: 95,
        description:
          'Algas crujientes sazonadas con especias thai y sal de mar.',
        detail:
          'Snack delicado y salino, perfecto para abrir mesa.',
      },
      {
        id: 'rollo-namita',
        name: 'Rollos Vietnamitas (2 unidades)',
        price: 110,
        description:
          'Rollos crujientes fritos relleno de verduras y carne.',
        detail:
          'Bocado crujiente y aromatico para compartir.',
      },
      {
        id: 'pao',
        name: 'Bao',
        price: 200,
        description:
          'Pan al vapor suave y esponjoso relleno de proteina marinada, vegetales y salsa especial.',
        detail:
          'Esponjoso, tibio y de perfil umami.',
      },
      {
        id: 'gyozas',
        name: 'Gyozas',
        price: 160,
        description:
          'Empanadillas doradas al sarten con relleno de carne picada y salsa oriental.',
        detail:
          'Marcadas al sarten, jugosas y servidas al punto.',
      },
      {
        id: 'pollo-satay',
        name: 'Pollo Satay',
        price: 75,
        description:
          'Brochetas de pollo marinadas en especias thai, con salsa de cacahuate.',
        detail:
          'Una entrada clasica, ahumada y cremosa.',
      },
      {
        id: 'moo-ping',
        name: 'Mooping',
        price: 85,
        description:
          'Brochetas de cerdo thai marinado, suave por dentro y caramelizado por fuera.',
        detail:
          'Street food tailandes con notas dulces y asadas.',
      },
    ],
  },
  {
    id: 'currys',
    label: 'Currys',
    eyebrow: 'Thai curry',
    items: [
      {
        id: 'curry-rojo',
        name: 'Curry Rojo',
        price: 240,
        description:
          'Preparado con pasta tradicional de chile rojo, leche de coco cremosa y especias tailandesas.',
        detail:
          'Sabor intenso, picante y con toques profundos de ajo, hierbas y coco. Disponible con toufu $240, pollo $290, res $320 o camaron $360.',
        options: [
          { label: 'Toufu', price: 240 },
          { label: 'Pollo', price: 290 },
          { label: 'Res', price: 320 },
          { label: 'Camaron', price: 360 },
        ],
      },
      {
        id: 'curry-verde',
        name: 'Curry Verde',
        price: 240,
        description:
          'Nuestro curry mas aromatico, elaborado con albahaca thai, leche de coco y hierbas frescas.',
        detail:
          'Perfil herbal, fresco y ligeramente picante. Disponible con toufu $240, pollo $290, res $320 o camaron $360.',
        options: [
          { label: 'Toufu', price: 240 },
          { label: 'Pollo', price: 290 },
          { label: 'Res', price: 320 },
          { label: 'Camaron', price: 360 },
        ],
      },
      {
        id: 'curry-especial',
        name: 'Curry Especial',
        price: 240,
        description:
          'Receta exclusiva de la casa con mezcla especial de especias orientales, leche de coco lemongrass y salsa secreta.',
        detail:
          'Cremoso, aromatico y con un sabor profundo y balanceado. Disponible con toufu $240, pollo $290, res $320 o camaron $360.',
        options: [
          { label: 'Toufu', price: 240 },
          { label: 'Pollo', price: 290 },
          { label: 'Res', price: 320 },
          { label: 'Camaron', price: 360 },
        ],
      },
    ],
  },
  {
    id: 'arroces-noodles',
    label: 'Arroces/Noodles',
    eyebrow: 'Wok',
    items: [
      {
        id: 'arroz-frito-pina',
        name: 'Arroz Frito con Pina',
        price: 230,
        description:
          'Arroz salteado estilo thai con pina fresca, camaron, vegetales y balance entre dulce y salado.',
        detail:
          'Arroz de wok con perfil tropical y final salino.',
      },
      {
        id: 'pad-thai',
        name: 'PadThai',
        price: 255,
        description:
          'Un clasico tailandes de sabor agridulce y salado con camaron, brote de soja, cacahuate y cebollin.',
        detail:
          'Balance entre tamarindo, wok y textura sedosa de noodles.',
      },
      {
        id: 'tallarines-coco',
        name: 'Tallarines Thai al Coco',
        price: 270,
        description:
          'Fideos de arroz en curry rojo con leche de coco, camaron, brotes de soya y aroma de lemongrass.',
        detail:
          'Meloso, fragante y de especia amable.',
      },
      {
        id: 'mama-thai-yen',
        name: 'Mama Thai Ramen',
        price: 190,
        description:
          'Ramen estilo tailandes con un huevo estrellado.',
        detail:
          'Confort directo, calido y especiado.',
      },
      {
        id: 'pho-deles',
        name: 'Pho de Res',
        price: 230,
        description:
          'Fideos de arroz en caldo de res aromatico, con laminas de carne, hierbas frescas y un toque de limon.',
        detail:
          'Ligero, calido y reconfortante.',
      },
      {
        id: 'pad-krao-pao',
        name: 'Pad Krao Pao',
        price: 260,
        description:
          'Salteado thai con albahaca, chile, ajo y carne servida con arroz jazmin y huevo frito.',
        detail:
          'Intenso, aromatico y de caracter callejero tailandes.',
        options: [
          { label: 'Pollo', price: 260 },
          { label: 'Res', price: 290 },
          { label: 'Camaron', price: 310 },
        ],
      },
    ],
  },
  {
    id: 'postres',
    label: 'Postres',
    eyebrow: 'Dessert',
    items: [
      {
        id: 'arroz-glutinoso-mango',
        name: 'Arroz Glutinoso con Mango',
        price: 160,
        description:
          'Arroz glutinoso con crema de coco y mango fresco, un postre clasico tailandes.',
        detail:
          'Final suave, cremoso y fragante con mango maduro.',
      },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    eyebrow: 'Drinks',
    items: [
      {
        id: 'agua-jamaica',
        name: 'Agua de Jamaica',
        price: 65,
        description: 'Infusion fria de flor de jamaica con toque citrico y sin azucar anadida.',
        detail: 'Fresca, ligeramente acida y de color profundo. Sin alcohol.',
      },
      {
        id: 'te-thai',
        name: 'Te Thai con Leche',
        price: 80,
        description: 'Te negro tailandes con leche de coco condensada servido sobre hielo.',
        detail: 'Cremoso, dulce y especiado. Bebida iconica de Bangkok.',
      },
      {
        id: 'limonada-lemongrass',
        name: 'Limonada de Lemongrass',
        price: 75,
        description: 'Limon fresco con infusion de limoncillo y jarabe de cana natural.',
        detail: 'Fresca y aromatica con notas herbales que evocan la cocina thai.',
      },
      {
        id: 'agua-mineral',
        name: 'Agua Mineral',
        price: 40,
        description: 'Agua mineral natural 600 ml.',
        detail: 'Agua mineral Penafiel o equivalente.',
      },
      {
        id: 'refresco',
        name: 'Refresco',
        price: 45,
        description: 'Seleccion de refrescos nacionales en lata o botella.',
        detail: 'Coca-Cola, Sprite, Manzanita Sol.',
      },
    ],
  },
  {
    id: 'cocteleria',
    label: 'Cocteleria',
    eyebrow: 'Cocktails',
    items: [
      {
        id: 'lemongrass-mule',
        name: 'Lemongrass Mule',
        price: 185,
        description: 'Vodka premium, infusion de limoncillo, jengibre fresco y cerveza de jengibre artesanal.',
        detail: 'Refrescante, aromatico y con final picante de jengibre. Servido en copa de cobre.',
      },
      {
        id: 'thai-basil-smash',
        name: 'Thai Basil Smash',
        price: 195,
        description: 'Gin artesanal, albahaca thai macerada, limon fresco y jarabe de galanga.',
        detail: 'Herbal, citrico y de perfil floral. El coctel emblema de la casa.',
      },
      {
        id: 'mango-chili-margarita',
        name: 'Mango & Chili Margarita',
        price: 190,
        description: 'Tequila blanco, pure de mango fresco, chile habanero y sal de tamarindo en el borde.',
        detail: 'Balance perfecto entre dulce, acido y picante. Un clasico reinventado.',
      },
      {
        id: 'coconut-negroni',
        name: 'Coconut Negroni',
        price: 200,
        description: 'Gin, Campari y vermut rojo infusionados con leche de coco tostada.',
        detail: 'Amargo, cremoso y tropical. Para los paladares mas sofisticados.',
      },
      {
        id: 'kaffir-spritz',
        name: 'Kaffir Lime Spritz',
        price: 175,
        description: 'Prosecco, licor de lima kaffir, pepino fresco y agua mineral con gas.',
        detail: 'Ligero, burbujeante y aromatico. Perfecto para acompanar entradas.',
      },
      {
        id: 'mocktail-thai',
        name: 'Thai Garden Mocktail',
        price: 145,
        description: 'Sin alcohol. Infusion de lemongrass, menta, lima fresca y soda de yuzu.',
        detail: 'Sofisticado y refrescante. La opcion sin alcohol de la cocteleria de autor.',
      },
    ],
  },
]

export const allMenuItems = menuCategories.flatMap((category) =>
  category.items.map((item) => ({ ...item, category: category.label })),
)
