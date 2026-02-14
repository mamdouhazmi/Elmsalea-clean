export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Elmsalea clean",
    description: "شركة Elmsalea clean الرائدة في خدمات غسيل وتلميع السيارات بالبخار في الرياض",
    url: "https://elmsaleaclean.com",
    telephone: "+966560280857",
    address: {
      "@type": "PostalAddress",
      addressLocality: "الرياض",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "24.7136",
      longitude: "46.6753",
    },
    openingHours: "Mo-Su 06:00-23:00",
    priceRange: "$$",
    image: "https://elmsaleaclean.com/og-image.jpg",
    sameAs: ["https://wa.me/9660545915592"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات غسيل وتلميع السيارات",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "غسيل مراتب السيارة بالبخار",
            description: "تنظيف عميق لمراتب السيارة باستخدام تقنية البخار",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "تلميع سيارات داخلي",
            description: "تلميع شامل للأجزاء الداخلية للسيارة",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "غسيل سيارات متنقل",
            description: "خدمة غسيل السيارات في موقعك",
          },
        },
      ],
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Elmsalea clean",
    url: "https://elmsaleaclean.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://elmsaleaclean.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
