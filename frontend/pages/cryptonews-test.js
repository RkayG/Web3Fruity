
export default function Component() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a] p-6 md:col-span-2 lg:col-span-1">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <img src="/placeholder.svg" alt="Crypto News Hero" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-bold text-white">Bitcoin Surges to New All-Time High</h2>
                  <p className="mt-2 text-white/80">
                    The leading cryptocurrency breaks through the $60,000 barrier, fueling excitement in the crypto
                    market.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a] p-4">
                <div className="flex h-[100px] items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Crypto News Thumbnail"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium">Ethereum Hits New All-Time High, Surpassing $2,000</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The second-largest cryptocurrency continues its impressive rally, driven by growing institutional
                    adoption and the upcoming Ethereum 2.0 upgrade.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a] p-4">
                <div className="flex h-[100px] items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Crypto News Thumbnail"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium">Dogecoin Surges, Becoming the 5th Largest Cryptocurrency</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The meme-inspired cryptocurrency continues its meteoric rise, fueled by celebrity endorsements and
                    growing retail investor interest.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a] p-4">
                <div className="flex h-[100px] items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Crypto News Thumbnail"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium">Coinbase Goes Public, Marking a Milestone for Crypto Adoption</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The leading cryptocurrency exchange's direct listing on the Nasdaq is seen as a significant step in
                    the mainstream acceptance of digital assets.
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a] p-4">
                <div className="flex h-[100px] items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Crypto News Thumbnail"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium">Institutional Investors Increase Crypto Allocations</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Major financial institutions, including hedge funds and endowments, are steadily increasing their
                    exposure to cryptocurrencies, signaling growing mainstream adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }