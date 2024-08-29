import {
  component,
  defineTheme,
  directory,
  group,
  link,
  site,
  type SiteComponent,
} from '@neato/guider/theme';

const siteTemplate = site('docs', {
  dropdown: [
    link('Documentation', '/docs/guides', { icon: 'fa6-solid:house' }),
    link('API reference', '/api-ref'),
  ],
  navigation: [
    link('Email Support', '/docs/guides', { icon: 'fa6-solid:house' }),
    link('Polymarket', 'https://polymarket.com/'),
  ],
});

export default defineTheme([
  site('docs', {
    extends: [siteTemplate],
    meta: () => <></>,
    contentFooter: {
      socials: [],
      text: 'Copyright (c) 2023',
      editRepositoryBase: 'https://github.com/mrjvs/neatojs',
    },
    pageFooter: {
      text: 'Made with love <6',
    },
    directories: [
      directory('guides', {
        sidebar: [
          link('Developer Docs', 'https://polymarket.com/developer', {
            style: 'star',
            icon: 'fa6-solid:envelope',
          }),
          link('Discord', 'https://discord.gg/polymarket', {
            style: 'star',
            icon: 'radix-icons:discord-logo',
          }),
          link('Twitter', 'https://x.com/polymarket', {
            style: 'star',
            icon: 'radix-icons:twitter-logo',
          }),

          group('Get Started', [
            link(
              'What is Polymarket?',
              '/docs/guides/get-started/what-is-polymarket',
            ),
            link('How to Sign-Up', '/docs/guides/get-started/how-to-signup'),
            link('How to Deposit', '/docs/guides/get-started/how-to-deposit'),
            link(
              'Making your First Trade',
              '/docs/guides/get-started/making-your-first-trade',
            ),
            link(
              'What is a Prediction Market?',
              '/docs/guides/get-started/what-are-prediction-markets',
            ),
          ]),

          group('Deposits', [
            link('Deposit with Coinbase', '/docs/guides/deposits/coinbase'),
            link(
              'Deposit Using Your Card or PayPal',
              '/docs/guides/deposits/moonpay',
            ),
            link('Deposit with Robinhood', '/docs/guides/deposits/robinhood'),
            link(
              'Deposit USDC on Ethereum',
              '/docs/guides/deposits/usdc-on-eth',
            ),
            link(
              'Large Cross Chain Deposits',
              '/docs/guides/deposits/large-cross-chain-deposits',
            ),
            link('How to Withdraw', '/docs/guides/deposits/how-to-withdraw'),
          ]),

          group('Markets', [
            link(
              'Can I create my own market?',
              '/docs/guides/markets/can-anyone-make-a-market',
            ),
            link(
              'How are markets created?',
              '/docs/guides/markets/how-are-markets-created',
            ),
            link(
              'How are Markets Resolved',
              '/docs/guides/markets/how-are-markets-resolved',
            ),
            link('How Are Markets Disputed?', '/docs/guides/markets/dispute'),
            link(
              'How are markets clarified?',
              '/docs/guides/markets/how-are-markets-clarified',
            ),
          ]),

          group('Trading', [
            link(
              'Using the orderbook',
              '/docs/guides/trading/using-the-orderbook',
            ),
            link('Limit orders', '/docs/guides/trading/limit-orders'),
            link(
              'Does Polymarket Have Trading Limits?',
              '/docs/guides/trading/no-limits',
            ),
            link('Can I sell early', '/docs/guides/trading/exiting-positions'),
            link(
              'How are prices calculated?',
              '/docs/guides/trading/how-are-prices-calculated',
            ),
            link('Trading Fees', '/docs/guides/trading/fees'),
          ]),

          group('FAQ', [
            link('Is my money safe', '/docs/guides/FAQ/is-my-money-safe'),
            link(
              'How to Export Your Private Key',
              '/docs/guides/FAQ/how-to-export-private-key',
            ),
            link(
              'Why do i need crypto',
              '/docs/guides/FAQ/why-do-i-need-crypto',
            ),
            link(
              'Does polymarket have an API',
              '/docs/guides/FAQ/does-polymarket-have-an-api',
            ),
            link('sell early', '/docs/guides/FAQ/sell-early'),
            link('Embeds', '/docs/guides/FAQ/embeds'),
            link('When token', '/docs/guides/FAQ/wen-token'),
            link('Support', '/docs/guides/FAQ/support'),
            link(
              'Is Polymarket the house',
              '/docs/guides/FAQ/is-polymarket-the-house',
            ),
          ]),
        ],
        settings: {
          colors: {
            primary: '#50EA8E',
            primaryDarker: '#1BA965',
            primaryLighter: '#89FFAA',
          },
        },
      }),
      directory('cli', {
        sidebar: [
          link('Getting started', '/docs/cli/'),
          link('CLI A', '/docs/cli/cli-a'),
          link('CLI B', '/docs/cli/cli-b'),
          link('David Tennant', '/docs/cli/tennant'),
          component(() => (
            <div
              style={{
                backgroundColor: '#000',
                padding: 16,
                borderRadius: 7,
              }}
            >
              Custom component
            </div>
          )),
        ],
      }),
      directory('misc', {
        sidebar: [
          link('The misc', '/docs/misc/'),
          link('The cure', '/docs/misc/the-cure'),
        ],
      }),
    ],
  }),
  site('api-ref', {
    extends: [siteTemplate],
    directories: [
      directory('ref', {
        sidebar: [
          link('The API reference', '/api-ref/'),
          link('Other info', '/api-ref/other'),
        ],
      }),
    ],
  }),
]) satisfies SiteComponent[];
