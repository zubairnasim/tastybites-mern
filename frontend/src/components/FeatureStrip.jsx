const features = [
  {
    icon: 'ri-drinks-2-fill',
    title: 'Crispy & Fresh',
    description: 'Freshly prepared'
  },
  {
    icon: 'ri-restaurant-fill',
    title: 'Hygienic',
    description: 'Clean & safe'
  },
  {
    icon: 'ri-vip-crown-fill',
    title: 'Quality Ingredients',
    description: 'Carefully selected'
  },
  {
    icon: 'ri-home-heart-fill',
    title: 'Made With Love',
    description: 'Prepared with care'
  },
  {
    icon: 'ri-takeaway-fill',
    title: 'Home Delivery',
    description: 'At your doorstep'
  }
]

function FeatureStrip() {
  return (
    <section className="bg-yellow-300 border-t-4 border-black">

      {/* =================================
          INFINITE SCROLL HEADLINE STRIP
      ================================= */}
      <div className="bg-black text-white overflow-hidden">

        <div className="flex w-max animate-feature-scroll">

          {/* First set */}
          <div className="flex items-center shrink-0">

            {features.map((feature, index) => (
              <div
                key={`first-${feature.title}`}
                className="flex items-center gap-20 px-10"
              >
                <span className="text-sm sm:text-base uppercase whitespace-nowrap">
                  {feature.title}
                </span>

                <span className="text-yellow-200 text-xl">
                  ✦
                </span>
              </div>
            ))}

          </div>


          {/* Duplicate set for seamless loop */}
          <div className="flex items-center shrink-0">

            {features.map((feature, index) => (
              <div
                key={`second-${feature.title}`}
                className="flex items-center gap-20 px-10"
              >
                <span className="text-sm sm:text-base uppercase whitespace-nowrap">
                  {feature.title}
                </span>

                {index !== features.length - 1 && (
                  <span className="text-yellow-200 text-xl">
                    ✦
                  </span>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>


      {/* =================================
          FEATURE ITEMS
      ================================= */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          {features.map((feature) => (
  <div
    key={feature.title}
    className="
      group
      flex
      flex-col
      items-center
      text-center
      transition-transform
      duration-300
      hover:-translate-y-2
      cursor-default
    "
  >

    {/* Icon */}
    <div
      className="
        w-16
        h-16
        flex
        items-center
        justify-center
        mb-3
        transition-transform
        duration-300
        group-hover:scale-110
        group-hover:-translate-y-1
      "
    >
      <i className={`${feature.icon} text-3xl`}></i>
    </div>


    {/* Title */}
    <h3
      className="
        font-black
        text-m
        transition-transform
        duration-300
        group-hover:scale-105
      "
    >
      {feature.title}
    </h3>


    {/* Description */}
    <p
      className="
        text-xs
        mt-1
        opacity-70
        transition-opacity
        duration-300
        group-hover:opacity-100
      "
    >
      {feature.description}
    </p>

  </div>
))}

        </div>

      </div>

    </section>
  )
}

export default FeatureStrip