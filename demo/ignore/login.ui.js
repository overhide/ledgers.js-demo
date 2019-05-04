/**
 * Function related to data binding and UI manipulation in the demo login.html code.
 * 
 * Anything that's not related to demoing oh-ledgers.js but is instead of related to supporting the UX.
 */

// callbacks
ui = {
  /**
   * Called when Ethereum selected in UI
   */
  onEthereumSelected: null,

  /**
   * Called when Ethereum selected in UI
   */
  onFiatSelected: null,

  /**
   * Called whenever creds are being changed but they error out on the form
   * @param {string} address
   * @param {string} secret
   */
  onCredsChangedCheckSignature: null,

  /**
   * Called when address generation required by UI
   */
  onGenerate: null,

  /**
   * Called when common login requested
   */
  onGoCommon: null,

  /**
   * Called when epic login requested
   */
  onGoEpic: null,

  /**
   * Called when legendary login requested
   */
  onGoLegendary: null,
  
  /**
   * Setup UI on load
   */
  setup: setupUi,

  /**
   * Update UI based on data
   * 
   * @param {Object} data
   */
  update: updateUi,

  /**
   * Popup to inform on using a test VISA
   */
  popupTestVisaInfo: popupTestVisaInfo,

  /**
   * Signal wallet popup
   */
  signalWalletPopup: signalWalletPopup
};

var address = null;
var secret = null; 

// setup screen at start
function setupUi() { 

  // wallet popup
  $('#wallet-popup').fadeOut(0);

  // change currency
  $('#ethereum').on('click', function () {
    if ($('#ethereum').checkbox('is disabled')) return;
    $('#epic2pay').text(paymentSchedule['eth-web3'].epicTierCost);
    $('#legendary2pay').text(paymentSchedule['eth-web3'].legendaryTierCost);
    $('#ethereum').checkbox('set checked');
    if (ui.onEthereumSelected) ui.onEthereumSelected();
  });
  $('#ohledger').on('click', function () {
    $('#epic2pay').text(paymentSchedule['ohledger'].epicTierCost);
    $('#legendary2pay').text(paymentSchedule['ohledger'].legendaryTierCost);
    $('#ohledger').checkbox('set checked');
    if (ui.onFiatSelected) ui.onFiatSelected();
  });

  // entry validation
  $('#addressform')
    .form({
      fields: {
        ledgeraddress: { rules: [{ type: 'regExp[/^0x[0-9a-h]{40}$/gi]', prompt: "Address must start with '0x', be a hexadecimal string, and be 42 characters long" }] },
        secretkey: { rules: [{ type: 'regExp[/^0x[0-9a-h]{64}$/gi]', prompt: "Secret key must start with '0x', be a hexadecimal string, and be 66 characters long" }] },
        checkedwhensigned: { rules: [{ type: 'checked', prompt: "Invalid pair: secret cannot sign for the address" }] }
      }
    });

  $('#ethereum').checkbox('set disabled');
  $('#ohledger').trigger('click');

  $("#addressform input").on('change keyup input', function (e) {
    let newAddress = $('#ledgeraddress').val()
    let newSecret = $('#secretkey').val();
    if (newAddress !== address
       || newSecret !== secret) {
      address = newAddress;
      secret = newSecret;         
      $('#addressform').form('validate form');
      if (!$('#addressform').form('is valid')) {
        ui.onCredsChangedCheckSignature(address, secret);
      }
    }
  });
}

// update screen
function updateUi(data) {
  address = data.address;
  secret = data.privateKey;
  $('#ledgeraddress').val(address);
  $('#secretkey').val(secret);
  $('#currentnet').text(data.network);

  $('#getwallet').hide();
  $('#needrinkeby').hide();
  $('#usingwallet').hide();

  $('#historycontent').html(renderHistoryModal(data));

  $('#epicneedmore').text(data.balanceDueForEpic);
  $('#legendaryneedmore').text(data.balanceDueForLegendary);

  $('#resetpasswordbutton').hide();

  if (!data.isEthereumUsed) {
    $('#resetpasswordbutton').show();
  }
  if (!data.isWalletPresent) {
    $('#getwallet').show();
    $('#ethereum').checkbox('set disabled');
    $('#ohledger').checkbox('set checked');
    $('#secretkeycomponent').show();
    $('#generatebutton').show();
    $('#ledgeraddresscopyicon').show();
    $('#ledgeraddress').prop('readonly', false);
  } else {
    $('#ethereum').checkbox('set enabled');
    $('#secretkeycomponent').hide();
    $('#generatebutton').hide();
    $('#ledgeraddresscopyicon').hide();
    $('#ledgeraddress').prop('readonly', true);
    if (data.isEthereumUsed && !data.isNetworkReady) {
      $('#needrinkeby').show();
    }
    if (!data.isEthereumUsed) {
      $('#usingwallet').show();
    }
    $('#login').removeClass('disabled');
  }
  $('#viewhistory').addClass('disabled');
  $('#common').addClass('disabled');
  $('#epic').addClass('disabled');
  $('#legendary').addClass('disabled');
  if (data.isAddressSigned) {
    $('#checkedwhensigned').prop('checked', true);
  } else {
    $('#checkedwhensigned').prop('checked', false);
  }  
  if (data.isAddressSigned 
    && (!data.isEthereumUsed || data.isNetworkReady)
    && !data.isGathering) {
    $('#viewhistory').removeClass('disabled');
    $('#common').removeClass('disabled');
    $('#epic').removeClass('disabled');
    $('#legendary').removeClass('disabled');
  }
  if (data.isGathering) {
    $('#viewhistory').addClass('loading');
    $('#common').addClass('loading');
    $('#epic').addClass('loading');
    $('#legendary').addClass('loading');
  } else {
    $('#viewhistory').removeClass('loading');
    $('#common').removeClass('loading');
    $('#epic').removeClass('loading');
    $('#legendary').removeClass('loading');
  }
  $('#addressform').form('validate form');

  updateButtons(data);
}

function updateButtons(data) {
  $('#epic').text('Buy Epic');
  $('#legendary').text('Buy Legendary');
  $('#common').show();
  $('#epic').show();
  $('#legendary').show();
  if (data.balanceDueForLegendary === 'paid') {
    $('#common').hide();
    $('#epic').hide()
    $('#legendary').text('Go Legendary');
    return;
  }
  if (data.balanceDueForEpic === 'paid') {
    $('#common').hide();
    $('#epic').text('Go Epic');
  }
}

function generate() {
  if (ui.onGenerate) ui.onGenerate();
}

// @param {string} which - data key to copy
function copyToClipboard(which) {
  let str = $('#'+which).val();
  if (!str) return;
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}


function renderHistoryModal(data) {
  let txs = data.txs;
  if (!txs || txs.length == 0) return '';
  let from = data.txsFrom;
  let to = data.txsTo;
  let denomination = data.txsDenomination;
  let imparter = data.isEthereumUsed ? ETH : data.isWalletPresent ? OHLEDGER_WEB3 : OHLEDGER;
  let rows = '';
  for (tx of txs) {
    let amount = parseFloat(tx['transaction-value']) / paymentSchedule[imparter].currencyLabelToDenominationMultiplier;
    amount = amount.toFixed(paymentSchedule[imparter].fixedPointDigitsForDisplay)
    let row = `<div class="ui segment yellow">
                <div class="ui fluid labeled input">
                  <div class="ui basic label">From</div>
                  <input readonly type="text" value="${from}"/>
                </div>
                <div class="ui fluid labeled input">
                  <div class="ui basic label">To</div>
                  <input readonly type="text" value="${to}"/>
                </div>
                <div class="ui fluid labeled input">
                  <div class="ui basic label">Amount (${denomination})</div>
                  <input readonly type="text" value="${amount}"/>
                </div>
                <div class="ui fluid labeled input">
                  <div class="ui basic label">From</div>
                  <input readonly type="text" value="${(new Date(tx['transaction-date'])).toLocaleString()}"/>
                </div>
               </div>
    `;
    rows += row;
  };
  $('#historycontent').html(rows);
}

function gocommon() {
  if (ui.onGoCommon) ui.onGoCommon();
}

function goepic() {
  if (ui.onGoEpic) ui.onGoEpic();
}

function golegendary() {
  if (ui.onGoLegendary) ui.onGoLegendary();
}

async function popupTestVisaInfo() {
  var popupTestVisaInfoPromise = null;
  popupTestVisaInfoPromise = new Promise((resolve,reject) => {
    $('#testvisa-modal')
      .modal({
        onHidden: resolve
      })
      .modal('show');
  });
  await popupTestVisaInfoPromise;
  return;
}

function signalWalletPopup() {
  $('#wallet-popup').fadeIn().delay(2500).fadeOut();
}