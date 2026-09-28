// دالة صغيرة لبناء رابط صورة (بدّل الصور بصور مشاريعك الحقيقية)
const img = (id, w = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const P = {
  glass: "1497366811353-6870744d04b2",
  alu: "1600566753086-00f18fb6b3ea",
  door: "1600607687920-4e2a09cf159d",
  interior: "1600210492486-724fe5c67fb0",
  shop: "1556742049-0cfed4f6a45d",
  shower: "1620626011761-996317b8d101",
};

export const works = [
  {
    slug: "glass-facades",
    title: "واجهات زجاجية",
    category: "واجهات",
    image: img(P.glass, 1000),
    heroImage: img(P.glass, 2000),
    subtitle: "تصميم وتنفيذ واجهات زجاجية بأعلى معايير الجودة والدقة",
    sections: [
      {
        title: "الواجهات الزجاجية الستائرية",
        lead: "نظام واجهات زجاجية عصري يمنح المبنى مظهراً راقياً ويسمح بدخول الإضاءة الطبيعية بشكل مثالي.",
        paragraphs: [
          "نقوم بتنفيذ الواجهات الزجاجية بمختلف الأنواع، مع اختيار الزجاج والفريمات المناسبة لطبيعة المبنى والظروف المناخية.",
          "يتم التنفيذ بأيدي فنيين مدربين وباستخدام خامات عالية الجودة تضمن العزل الحراري والصوتي وطول العمر.",
        ],
        image: img(P.glass),
        gallery: [P.glass, P.interior, P.alu, P.door, P.shop].map((id) => img(id)),
      },
      {
        title: "واجهات المحلات والمعارض",
        lead: "واجهات تجارية تجذب العملاء وتعكس هوية النشاط بتصميم أنيق وعملي.",
        paragraphs: [
          "نوفر حلولاً متكاملة لواجهات المحلات تشمل الزجاج السيكوريت والأبواب الأوتوماتيك وأنظمة الأمان.",
        ],
        image: img(P.shop),
        gallery: [P.shop, P.glass, P.door, P.interior].map((id) => img(id)),
      },
    ],
  },
  {
    slug: "aluminium-works",
    title: "أعمال ألوميتال",
    category: "ألوميتال",
    image: img(P.alu, 1000),
    heroImage: img(P.alu, 2000),
    subtitle: "تشطيبات ألوميتال دقيقة بتصميمات عصرية",
    sections: [
      {
        title: "كلادينج الألوميتال",
        lead: "حل مثالي لتكسية الواجهات بمظهر عصري وتحمل عالٍ للعوامل الجوية.",
        paragraphs: [
          "نقدم أعمال الألوميتال بألوان وتشطيبات متنوعة مع ضمان دقة القص والتركيب.",
        ],
        image: img(P.alu),
        gallery: [P.alu, P.glass, P.interior, P.shop].map((id) => img(id)),
      },
    ],
  },
  {
    slug: "glass-doors",
    title: "أبواب زجاجية",
    category: "زجاج",
    image: img(P.door, 1000),
    heroImage: img(P.door, 2000),
    subtitle: "أبواب زجاجية بتصميمات متنوعة للمنازل والمكاتب",
    sections: [
      {
        title: "الأبواب والقواطيع الزجاجية",
        lead: "أبواب زجاجية سيكوريت بتصميمات تجمع بين الأناقة والأمان.",
        paragraphs: [
          "تناسب الأبواب الزجاجية المكاتب والمنازل والمحلات، وتتوفر بأنظمة سحب ولف وطي حسب المساحة.",
        ],
        image: img(P.door),
        gallery: [P.door, P.glass, P.interior, P.shower].map((id) => img(id)),
      },
    ],
  },
  {
    slug: "interior-design",
    title: "تصميمات داخلية",
    category: "تصميم داخلي",
    image: img(P.interior, 1000),
    heroImage: img(P.interior, 2000),
    subtitle: "تصميمات داخلية متكاملة من الفكرة حتى التنفيذ",
    sections: [
      {
        title: "التصميم الداخلي للمساحات السكنية",
        lead: "نحول مساحتك إلى تصميم يعكس ذوقك ويحقق أقصى استفادة من كل متر.",
        paragraphs: [
          "نبدأ بدراسة احتياجاتك ثم نقدم تصوراً متكاملاً يشمل الألوان والإضاءة والخامات.",
        ],
        image: img(P.interior),
        gallery: [P.interior, P.door, P.glass, P.shop].map((id) => img(id)),
      },
    ],
  },
  {
    slug: "shop-fronts",
    title: "واجهات محلات",
    category: "واجهات",
    image: img(P.shop, 1000),
    heroImage: img(P.shop, 2000),
    subtitle: "واجهات تجارية تعكس هوية نشاطك وتجذب العملاء",
    sections: [
      {
        title: "واجهات المحلات التجارية",
        lead: "واجهة المحل هي أول انطباع للعميل، ونحن نصممها لتكون لافتة وعملية.",
        paragraphs: [
          "ننفذ واجهات المحلات بالزجاج والألوميتال مع مراعاة الإضاءة واللافتات.",
        ],
        image: img(P.shop),
        gallery: [P.shop, P.glass, P.alu, P.door].map((id) => img(id)),
      },
    ],
  },
  {
    slug: "shower-cabins",
    title: "كبائن شاور",
    category: "زجاج",
    image: img(P.shower, 1000),
    heroImage: img(P.shower, 2000),
    subtitle: "كبائن شاور زجاجية بمقاسات مخصصة وتركيب دقيق",
    sections: [
      {
        title: "كبائن الشاور الزجاجية",
        lead: "زجاج سيكوريت بسمك مناسب وإكسسوارات مقاومة للصدأ لتدوم سنوات طويلة.",
        paragraphs: [
          "نصنع الكابينة بالمقاس المطلوب لحمامك، مع خيارات متعددة للزجاج الشفاف والمصنفر والملون.",
        ],
        image: img(P.shower),
        gallery: [P.shower, P.door, P.glass, P.interior].map((id) => img(id)),
      },
    ],
  },
];