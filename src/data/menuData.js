export const menuCategories = [
  {
    id: 'entradas',
    label: 'Entradas',
    eyebrow: 'Soirs',
    items: [
      {
        id: 'ensalada-papaya',
        name: 'Ensalada de Papaya',
        price: 245,
        description:
          'Papaya verde rallada, jitomate cherry, cacahuate y aderezo thai de limon con chile.',
        detail:
          'Fresca, crujiente y ligeramente picante. Ideal para abrir el apetito con notas citricas y dulces.',
      },
      {
        id: 'ensalada-papaya-mixta',
        name: 'Ensalada Papaya Mixta Tropical',
        price: 350,
        description:
          'Papaya verde con camaron, mango, hierbas frescas y vinagreta thai.',
        detail:
          'Una version mas abundante y tropical de la ensalada clasica, con contraste dulce, acido y salino.',
      },
      {
        id: 'ensalada-tofu',
        name: 'Ensalada de Tofu',
        price: 320,
        description:
          'Tofu suave, vegetales frescos, ajonjoli y salsa thai de la casa.',
        detail:
          'Ligera y aromatica, pensada para quienes buscan una entrada vegetal con textura sedosa.',
      },
      {
        id: 'sopa-tomyam',
        name: 'Sopa Tomyam Kung',
        price: 360,
        description:
          'Sopa tradicional thai con camaron, limoncillo, galanga, hojas de lima kaffir y chile.',
        detail:
          'Porcion para compartir. Caldo intenso, citrico y especiado, con el perfil clasico de Tailandia.',
      },
      {
        id: 'sopa-coco',
        name: 'Sopa de Leche de Coco',
        price: 260,
        description:
          'Caldo cremoso de coco con hierbas thai, hongos y un toque de limon.',
        detail:
          'Porcion para compartir. Suave, perfumada y balanceada entre dulzor natural y acidez.',
      },
      {
        id: 'nuggets-harina',
        name: 'Nuggets de Harina',
        price: 80,
        description:
          'Bocados dorados estilo thai, servidos con salsa dulce especiada.',
        detail:
          'Una entrada sencilla para acompanar con salsas y compartir al centro.',
      },
      {
        id: 'rollo-crujiente',
        name: 'Rollo Crujiente de Pollo con Mango',
        price: 250,
        description:
          'Rollos fritos rellenos de pollo, mango y vegetales, con salsa agridulce.',
        detail:
          'Crujientes por fuera, jugosos por dentro y con un final dulce tropical.',
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
        name: 'Rollo x Namita',
        price: 110,
        description:
          'Rollitos vietnamitas frescos, rellenos de vegetales y hierbas aromaticas.',
        detail:
          'Cinco unidades frescas, ligeras y acompanadas con salsa especial.',
      },
      {
        id: 'pao',
        name: 'Pao',
        price: 200,
        description:
          'Pan al vapor estilo bao con relleno de carne y salsa especiada.',
        detail:
          'Suave, aromatico y servido caliente para conservar su textura.',
      },
      {
        id: 'gyozas',
        name: 'Gyozas',
        price: 160,
        description:
          'Empanaditas al vapor y selladas, rellenas con mezcla de vegetales y proteina.',
        detail:
          'Doradas al punto, con salsa de soya preparada y notas de jengibre.',
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
        name: 'Moo Ping',
        price: 85,
        description:
          'Brochetas de cerdo marinadas con ajo, cilantro y salsa thai.',
        detail:
          'Carne jugosa con notas dulces y especiadas, estilo street food tailandes.',
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
        price: 280,
        description:
          'Base de curry rojo con leche de coco, bambu, vegetales y albahaca thai.',
        detail:
          'Disponible con tofu $280, pollo $300, res $320 o camaron $360. Picor medio, final cremoso.',
        options: [
          { label: 'Tofu', price: 280 },
          { label: 'Pollo', price: 300 },
          { label: 'Res', price: 320 },
          { label: 'Camaron', price: 360 },
        ],
      },
      {
        id: 'curry-verde',
        name: 'Curry Verde',
        price: 280,
        description:
          'Curry verde con leche de coco, berenjena, ejotes, albahaca thai y especias frescas.',
        detail:
          'Disponible con tofu $280, pollo $300, res $320 o camaron $360. Herbaceo, aromatico y picante.',
        options: [
          { label: 'Tofu', price: 280 },
          { label: 'Pollo', price: 300 },
          { label: 'Res', price: 320 },
          { label: 'Camaron', price: 360 },
        ],
      },
      {
        id: 'curry-especial',
        name: 'Curry Especial',
        price: 240,
        description:
          'Curry de la casa con leche de coco, vegetales y mezcla especial de especias.',
        detail:
          'Disponible con tofu $240, pollo $290, res $320 o camaron $380. Mas profundo y especiado.',
        options: [
          { label: 'Tofu', price: 240 },
          { label: 'Pollo', price: 290 },
          { label: 'Res', price: 320 },
          { label: 'Camaron', price: 380 },
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
          'Arroz salteado al wok con pina, vegetales, huevo y especias thai.',
        detail:
          'Dulce, salado y aromatico, con textura tostada de wok.',
      },
      {
        id: 'pad-thai',
        name: 'Pad Thai',
        price: 255,
        description:
          'Tallarines de arroz salteados con salsa tamarindo, huevo, tofu, brotes y cacahuate.',
        detail:
          'El clasico tailandes: acido, dulce y umami, terminado con limon fresco.',
      },
      {
        id: 'tallarines-coco',
        name: 'Tallarines Thai al Coco',
        price: 270,
        description:
          'Tallarines en salsa cremosa de coco con vegetales y hierbas thai.',
        detail:
          'Cremosidad ligera con perfume de coco y un toque especiado.',
      },
      {
        id: 'mama-thai-yen',
        name: 'Mama Thai Yen',
        price: 190,
        description:
          'Noodles estilo thai con vegetales, especias de la casa y salsa salteada.',
        detail:
          'Comfort food tailandes, directo y sabroso.',
      },
      {
        id: 'pho-deles',
        name: 'Pho Deles',
        price: 230,
        description:
          'Sopa de noodles con caldo aromatico, hierbas frescas y vegetales.',
        detail:
          'Caldo profundo y perfumado, servido con guarniciones frescas.',
      },
      {
        id: 'pad-krao-pao',
        name: 'Pad Krao Pao',
        price: 260,
        description:
          'Salteado thai con albahaca, chile, ajo, vegetales y arroz jazmin.',
        detail:
          'Intenso, aromatico y con caracter callejero tailandes.',
      },
    ],
  },
]

export const allMenuItems = menuCategories.flatMap((category) =>
  category.items.map((item) => ({ ...item, category: category.label })),
)
