<p align="center"><a href="https://github.com/overhide"><img src="./.github/logo.png" width="200px"/></a></p>

# [ledgers.js](https://www.npmjs.com/package/ledgers.js) demo

This repository is a [tutorial/demo/example login page](https://overhide.github.io/ledgers.js-demo/demo/login.html) for the [ledger-based authorization workflow](https://overhide.io/2019/03/20/why.html) as provided by the [ledgers.js](https://www.npmjs.com/package/ledgers.js) library.

It demonstrates how to make the [authorization workflows](https://overhide.io/2019/03/20/why.html) part of your application.

Please see the [ledgers.js](https://www.npmjs.com/package/ledgers.js) library for an introduction.

Please see https://overhide.io for more introductory material including videos and write-ups.

## Getting Started

The latest *ledgers.js* distribution is brought into the [demo/](demo/) folder using:

```
npm install
npm run pull
```

The demo uses in-browser wallets and requires to be run using a Web server.

The initial demo login page is [demo/login.html](demo/login.html).  To host it run:

```
npm run demo
```

This starts *http-server* reporting the port used, usually `8080`.  

Point your browser at http://localhost:8080/login.html to start the demo.

## Before You Run the Demo App

When you start the [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) take note of the BOTTOM-RIGHT pane which displays some information on the UI.

To make sense of the [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)); do read through the introductory material at the [ledgers.js NPM distribution page](https://www.npmjs.com/package/ledgers.js) and https://overhide.io.  

Below you will find a sample play-by-play run-through of the [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)).

## Test Environment APIs

This [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) interacts with the *Rinkeby* *Ethereum* testnet and the [overhide-ledger test environment](https://test.ledger.overhide.io).  This demo is for demonstration purposes.  

The respective API instances used by the [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) are the following test network nodes:

* ether:  [*overhide* Remuneration API for Ethereum](https://rinkeby.ethereum.overhide.io/swagger.html) 
* dollars:  [*overhide-ledger*--the renmuneration provider for US dollars](https://test.ohledger.com/swagger.html)

Use a [Rinkeby](https://faucet.rinkeby.io/) faucet to get "test" Ether for playing around with Ethereum in the [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)).

Use [Stripe's "test" credit cards](https://stripe.com/docs/testing#cards) to play around with dollar transactions in the [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)).

## *ledger.js* ([source](https://github.com/overhide/ledgers.js/blob/master/src/ledgers.js))([API](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html))

*ledger.js* ([source](https://github.com/overhide/ledgers.js/blob/master/src/ledgers.js))([API](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html)) complements blockchain wallets in the browser hence enables authorization via all supported ledgers in the *Service Code* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/service.html)):

* provides transaction and signing functionality for [*overhide-ledger*](https://test.ledger.overhide.io)
* abstracts [web3](https://github.com/ethereum/web3.js/) wallets' transaction and signing functionality for [ethers](https://rinkeby.ethereum.overhide.io/swagger.html)

This library abstracts wallets in the [*login*](https://overhide.github.io/ledgers.js-demo/demo/login.html) page; streamlining work for the UX developer.  To try this, run the [demo app](https://overhide.github.io/ledgers.js-demo/demo/login.html) connected to a [web3.js](https://github.com/ethereum/web3.js/) wallet such as [MetaMask](https://metamask.io/).  Keep in mind that at no point in *login.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) do we talk to [web3.js](https://github.com/ethereum/web3.js/) directly.  All interaction is abstracted by *ledger.js* ([source](https://github.com/overhide/ledgers.js/blob/master/src/ledgers.js))([API](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html)).  __This is the intent of the *ledgers.js library* ([source](https://github.com/overhide/ledgers.js/blob/master/src/ledgers.js))([API](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html)), to abstract interactions with wallets supporting ledgers that have *overhide* remuneration providers__.

The [*overhide-ledger*](https://test.ledger.overhide.io) does not have a wallet, but it can use any [web3.js](https://github.com/ethereum/web3.js/) wallet for key management and signing--[*overhide-ledger*](https://test.ledger.overhide.io) works with Ethereum public-key infrastructure.  Although Ethereum wallets can be used for [*overhide-ledger's*](https://test.ledger.overhide.io) credential management, no Ethereum wallet can transact with [*overhide-ledger*](https://test.ledger.overhide.io)--[*overhide-ledger*](https://test.ledger.overhide.io) is not an Ethereum node.  To make [*overhide-ledger*](https://test.ledger.overhide.io) transactions more seamless, *ledger.js* ([source](https://github.com/overhide/ledgers.js/blob/master/src/ledgers.js))([API](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html)) provides [*overhide-ledger*](https://test.ledger.overhide.io) specific tooling to assist the *login* page UX developer.  Again, see the [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)).

## Play-By-Play Run-Through of a [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) Session

This is a play-by-play run-through of the [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)).

Make sure you have a fresh [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) session open, then read-on.

**Make sure you're looking at the [demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) in widescreen mode**.

If you're not looking in *widescreen* you will not see the additional code-oriented panes:

* the log pane
* the source code pane

Orient yourself: read the text in the BOTTOM-RIGHT pane (source code pane).

If you get-ahead of this run-through and click on any logs (in the TOP-RIGHT pane) before you finish reading the orientation text (in the BOTTOM-RIGHT pane) the orientation text will disappear.  Simply [re-open the demo](https://overhide.github.io/ledgers.js-demo/demo/login.html) or refresh your browser.

If you have a [web3](https://github.com/ethereum/web3.js/) wallet active in your browser; logout of it to play along with the rest of the demo.

**( o_o) Look through the initial "game" login screen.**

We're presented with a cake "game" that offers three access tiers:

* common
* epic
* legendary

It allows you to enter the game for free or pay with dollars or ethers for the epic and legendary tiers.

### "Go Free" Run-Through

**( o_o) Look through the initial logs.**

In the TOP-RIGHT you see logs similar to the following:

```
       [...] (https://overhide.github.io/ledgers.js-demo/demo/login.html) :: global settings: paymentSchedule : {
                               "eth-web3": {
                                 "appAddress": "0x046c88317b23dc57F6945Bf4140140f73c8FC80F",
                                 "epicTierCost": "0.013 Ether",
                                 "legendaryTierCost": "0.0034 Ether",
                                 "currencyLabelToDenominationMultiplier": 1000000000000000000,
                                 "fixedPointDigitsForDisplay": 4,
                                 "denomination": "Ether",
                                 "tallyDaysForEpic": null,
                                 "tallyDaysForLegendary": 1
                               },
                               "ohledger": {
                                 "appAddress": "0x046c88317b23dc57F6945Bf4140140f73c8FC80F",
                                 "epicTierCost": "2.00 USD",
                                 "legendaryTierCost": "0.50 USD",
                                 "currencyLabelToDenominationMultiplier": 100,
                                 "fixedPointDigitsForDisplay": 2,
                                 "denomination": "USD",
                                 "tallyDaysForEpic": null,
                                 "tallyDaysForLegendary": 1
                               },
                               "ohledger-web3": {
                                 "appAddress": "0x046c88317b23dc57F6945Bf4140140f73c8FC80F",
                                 "epicTierCost": "2.00 USD",
                                 "legendaryTierCost": "0.50 USD",
                                 "currencyLabelToDenominationMultiplier": 100,
                                 "fixedPointDigitsForDisplay": 2,
                                 "denomination": "USD",
                                 "tallyDaysForEpic": null,
                                 "tallyDaysForLegendary": 1
                               }
                             }
```

**(¬-_-)¬ Click these logs.**

Once clicked the BOTTOM-RIGHT pane jumps to the the source code in *login.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) that printed out the above logs.

Note the *log(..)* call jumped-to: `log('global settings: paymentSchedule', paymentSchedule);`.  It is right at the start of *login.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) in one of the first `<script>` tags.

What's logged here is our *payment schedule* configuration which resides in the *config.js* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/config.js)) file (in this repo, part of demo app).

This *payment schedule* sits in its own file as we use it in both the front-end *login.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) as well as the *service.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/service.html)) files.

We need it in the front-end to tell the user what our prices for each tier are.

We need it in the service to know what payment amounts constitute authorizations to which tier. 

**( o_o) Take note of the `"appAddress": "0x046c88317b23dc57F6945Bf4140140f73c8FC80F"`.**

All the ledgers enumerated in our *payment schedule* list the application as having the address *0x046c88317b23dc57F6945Bf4140140f73c8FC80F*.

This is the application's Ethereum address on the [rinkeby testnet](https://rinkeby.etherscan.io/address/0x046c88317b23dc57f6945bf4140140f73c8fc80f) and on the [test *overhide-ledger*](https://test.ohledger.com/).

This is the address receiving (make-pretend) payments from the game's players.

Recall that *overhide-ledger* works with Ethereum addresses, so it's perfectly acceptable to have the same address for both ledgers.

**( o_o) Observe UI events.**

Notice the currency selection log:

```
[...] (https://overhide.github.io/ledgers.js-demo/demo/login.html) :: UI >> has USD selected
```

It orignates from the `ui.onFiatSelected = () => {..}` callback in *login.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)).  Click the log to see the code.

The `ui` namespace containing *onFiatSelected(..)* is declared at the top of [ignore/login.ui.js](https://github.com/overhide/ledgers.js/blob/master/demo/ignore/login.ui.js) in the global `ui = { .. }` object.  The rest of the UI callbacks are also declared here.  

Although the callbacks are declared in [ignore/login.ui.js](https://github.com/overhide/ledgers.js/blob/master/demo/ignore/login.ui.js), they are all assigned towards the end of *login.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)).

For readability/distinction, callbacks from the `ui` namespace log with the `UI >>` prefix.  Log lines prefixed with `UI >>` showcase transitions between currencies, input field changes, and button presses in the UI.

Callbacks from the `ui` namespace are triggered on UI state changes of the login page.  

*login.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) assigns functionality to these callbacks, but the rest of the UI implementation is tucked away inside of [ignore/login.ui.js](https://github.com/overhide/ledgers.js/blob/master/demo/ignore/login.ui.js) along side the template in [ignore/login.ui.html](https://github.com/overhide/ledgers.js/blob/master/demo/ignore/login.ui.html).  Files inside the [ignore](https://github.com/overhide/ledgers.js/blob/master/demo/ignore) folder are implementation details of the demo--such as styling, utilities for for the code and logging panes, and lower level UI state changing code.  They're in the [ignore](https://github.com/overhide/ledgers.js/blob/master/demo/ignore) folder to avoid cluttering [login.html](https://github.com/overhide/ledgers.js/blob/master/demo/login.html).

**( o_o) Quick recap of files in this repo.**

Reading about the [ignore](https://github.com/overhide/ledgers.js/blob/master/demo/ignore) folder above you might be wondering what all the files might be.  Below is a quick summary:

```
o
│   README.md                     -- this file
│
├───demo                          -- demo files
│   │   config.js                 -- payment schedule configuration we already talked about above 
│   │   login.html                -- the "login" page of the demo
│   │   service.html              -- the service page of the demo
│   │   ...
│   o
│
├───ignore                        -- supporting files
│   │   code.html                 -- code pane template
│   │   logging.js                -- logging pane code
│   │   login.ui.html             -- "login" page UI template
│   │   login.ui.js               -- "login" page UI code
│   │   overview-demo.png  
│   │   readme.txt
│   │   styles.css
│   │   welcome-from-service.txt
│   │   welcome.txt
│   │   what-demo.png
│   │   ...
│   o
│   ...
o   
```

**(¬-_-)¬ Click the "Generate" button.**

Notice that the *address* and *secret key* fields got populated.  

These input fields were populated by the [*ledgers.js*](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html)'s "ohledger" imparter--see "IMPARTERS" section in [*ledgers.js*](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html) library documentation.

We'll go through what just happened in the next few steps.

**(¬-_-)¬ Click the `[...](https://overhide.github.io/ledgers.js-demo/demo/login.html) :: UI >> onGenerate` log.**

Our clicking of the "Generate" button caused the `ui.onGenerate` callback to run and log this line.

The logging pane shows the UI's *onGenerate* function where our first interaction with the [*ledgers.js*](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html) occurs.

We see `ui.onGenerate` call [oh$.generateCredentials](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#generatecredentials), passing in the "ohledger" imparter tag, indicating the [ledger](https://test.ohledger.com/swagger.html) we're working with.

**( o_o) Notice the `[...] (https://overhide.github.io/ledgers.js-demo/demo/login.html) :: OH >> onCredentialsUpdate :: wallet callback called--address updated : {..}` log.**

Although we already saw logs from several UI callbacks originating from [ignore/login.ui.js](https://github.com/overhide/ledgers.js/blob/master/demo/ignore/login.ui.js), this is our first callback from [*ledgers.js*](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html).  

Notice the `OH >>` prefix on this log: signals the log's origin as an [*ledgers.js*](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html) callback.

The callback was triggered by the above [oh$.generateCredentials](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#generatecredentials) call into the library.  It furnished credentials for our UI.

This callback's contract is documented [here](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#oncredentialsupdate).

**(¬-_-)¬ Click the `[...](https://overhide.github.io/ledgers.js-demo/demo/login.html) :: OH >> onCredentialsUpdate :: wallet callback called--address updated: {..}` log.**

The code pane shows the [oh$.onCredentialsUpdate callback](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#oncredentialsupdate) called in response to a new *address* and *secret key* being generated by [oh$.generateCredentials](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#generatecredentials).

This callback ensures UI state is set and modified in response.

Following along--in the code pane--we see that the [oh$.onCredentialsUpdate callback](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#oncredentialsupdate) calls the `gatherData()` function which in turn calls the *getBalanceDue()* function.

The `gatherData()` function call (at the end of the [callback](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#oncredentialsupdate)) triggers [*ledgers.js*](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html) getters to update payment amounts via the "ohledger" imparter--the currently selected ledger--and compare it to the pre-configured payment schedule ([config.js](https://github.com/overhide/ledgers.js/blob/master/demo/config.js)).

This stack of functions make several calls to the [ledger](https://test.ohledger.com/swagger.html) abstracted via [*ledgers.js*](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html):

* [oh$.getTally](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#gettally)
* [oh$.getTransactions](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#gettransactions)
* [oh$.isOnLedger](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#isonledger)

**(¬-_-)¬ Click the "Go Free" button.**

With our new address generated we decide to play the game for free.  

Clicking the "Go Free" button we are presented with a modal.

This modal is furnished by [*ledgers.js*](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html) and is [*overhide-ledger*](https://test.ledger.overhide.io) specific.

For the time being don't follow through with the modal.  

Don't confirm you're not a robot.  

To see [*ledgers.js*'](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html) involvement **exit out of the modal by clicking the "x"** in the top-right corner.

**( o_o) Notice the `[...](https://overhide.github.io/ledgers.js-demo/demo/login.html) :: UI >> onGoCommon` log.**

We closed the modal with its "x" as it was obscuring the log and code panes.

Now that we see the panes, we also see the `[...](https://overhide.github.io/ledgers.js-demo/demo/login.html) :: UI >> onGoCommon` line in the logging pane.

**(¬-_-)¬ Click the `[...](https://overhide.github.io/ledgers.js-demo/demo/login.html) :: UI >> onGoCommon` log.**

The code pane shows the `ui.onGoCommon` callback.  

Notice how it first signs a made up message (containing a timestamp) using [oh$.sign](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#sign).  This signature verifies the gamer's ownership of their provided *address*.  Depending on imparter being used, [*ledgers.js*](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html) might sign without any interaction with the gamer, or cause a wallet to popup some UX flow.  The signature is provided to [oh$.createTransaction](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#createtransaction) as well as sent to the service code:  `window.location.href = 'service.html#...` in the code.

The "Go Free" workflow calls [oh$.createTransaction](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#createtransaction) if no transaction for the current user's address has been detected on the ledger.  Note that the `data.isOnLedger` value was previously filled via a [oh$.isOnLedger](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#isonledger) call in  `gatherData()`.

A core concept of the [ledger-based authorization](https://overhide.io/2019/03/20/why.html)--which we're going through--is that all tiers of authorization require a transaction on the selected ledger: any transaction, even if it's a transaction to yourself or someone other than the service provider you're signing into.  Hence free transactions still go through [oh$.createTransaction](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#createtransaction) should they fail the [oh$.isOnLedger](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html#isonledger) check.

Existence of a transaction will once again be verified in the *Service Code* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/service.html)) with a call to the selected ledger's *remuneration API*'s `/is-signature-valid`.

**(¬-_-)¬ Click the "Go Free" button, again.**

**(¬-_-)¬ Click through the reCaptcha "I'm not a robot" workflow.**

**(¬-_-)¬ Click the "Create Entry" button.**

You are now on a new page.  You're in the *service*.  The logs and code you see will now be from *service.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/service.html)).

**( o_o) Read the contents of this new page.**

The contents is informative, nothing more to add here.

**(¬-_-)¬ Click the `[...] (service.html) :: service.html uses the same global settings: paymentSchedule` log.**

These logs show the same *payment schedule* as we saw before in *login.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)); also loaded from [config.js](https://github.com/overhide/ledgers.js/blob/master/demo/config.js).  

The *service* is configured with the same schedule so as to be on the same page with respect to transaction tallies expected.

Whereby *login.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) needs the *payment schedule* to aid the user in paying, *service.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/service.html)) needs it to validate payment before allowing asked-for authorizations.

**(¬-_-)¬ Click the `[...] (service.html) :: remunaration API >> isValidOnLedger call` log.**

Take note that the *service* no longer uses [*ledgers.js*](https://overhide.github.io/ledgers.js/ledgers.js-rendered-docs/index.html) API.

In order to check with the selected ledger the remuneration API is accessed with basic HTTP calls:

```
await fetch(`${ uri } /is-signature-valid`,..)
```

Since there are only two methods in the remuneration API--and these methods are identical for all ledgers--the *service.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/service.html)) is streamlined by simple parametrization of the same code flow.

**(¬-_-)¬ Go ahead, click "Play Level".**

You earned it!

**(¬-_-)¬ Click on any *login.html* link to go back to the *login.html* ([source](https://github.com/overhide/ledgers.js/blob/master/demo/login.html)) page.**

Now that you finished a "free" play-through, go back to try again?

### "Buy Legendary" Run-Through

For this run-through we'll go much quicker as it is expected you did the run-through in the [previous section](#go-free-run-through) already.

**(¬-_-)¬ Click the "Generate" button.**

**( o_o) Take note of the "legendary cake" price.**

At the top of this login page, beside the golden cake icon, you see that for the selected address you're yet to pay sufficient funds to enter the game at the "legendary" tier:

```
  the legendary cake is 0.50 USD per 24 hours(0.50 short)
```

**(¬-_-)¬ Click the "Buy Legendary" button.**

**( o_o) Read through the information.**

**(¬-_-)¬ Click the "Let's Go" button.**

Clicking the "x" or the "Let's Go" button will bring you to a [Stripe.com](https://stripe.com) payment modal.

Once at the [Stripe.com](https://stripe.com) modal--where you enter VISA information--you could click the "x" to cancel out and read through the logs and code like we did in the [previous section](#go-free-run-through).  We're going to continue on instead.

**(¬-_-)¬ Enter "foo@bar.com" for the email.**

**(¬-_-)¬ Enter "4242 4242 4242 4242" for the card number.**

**(¬-_-)¬ Enter "02/25" for the expiry date.**

**(¬-_-)¬ Enter "222" for the CVC.**

**(¬-_-)¬ Click "Pay $0.50".**

**( o_o) You're back in the game.**

**(¬-_-)¬ Go ahead, click "Play Level".**

Thanks for persevering!
