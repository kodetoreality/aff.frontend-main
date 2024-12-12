const initialState = {
  netcent : null,
  Qpay : null,
  YaarPay : null,
  QpayCheckOutData : null,
  QpayResultsData : null,
}

const PaymentGateWayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PAYMENTGATEWAY_NETCENT_DATA":
      return {...state, netcent: action.data}
    case "PAYMENTGATEWAY_YAARPAY_DATA":
      return {...state, YaarPay: action.data}
    case "PAYMENTGATEWAY_QPAY_DATA":
      return {...state, Qpay: action.data}
    case "PAYMENTGATEWAY_QPAY_CHEKOUT_DATA":
      return {...state, QpayCheckOutData: action.data}
    case "PAYMENTGATEWAY_QPAY_RESULTS_DATA":
      return {...state, QpayResultsData: action.data}
    default:
      return state
  }
}
  
export default PaymentGateWayReducer
  