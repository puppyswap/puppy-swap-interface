import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://puppyswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.puppyswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.puppyswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://puppyswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://puppyswap.finance/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9066e87Bac891409D690cfEfA41379b34af06391',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/puppyswap-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/puppyswap-finance/',
      },
      /*{
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/', // KIBBLE-busd
      },*/
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
     /* {
        label: 'Audit Coming Soon',
        href: '',
      },*/
      {
        label: 'Github',
        href: 'https://github.com/puppyswap/',
      },
      {
        label: 'Docs',
        href: 'https://puppyswap-finance.gitbook.io/puppyswap-finance/',
      },
      {
        label: 'Blog',
        href: 'https://puppyswap-finance.medium.com/',
      },
    ],
  },
]

export default config
