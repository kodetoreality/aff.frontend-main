import React, { Suspense, lazy } from "react"
import { Router, Switch, Route,Redirect } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"
import {session_checked} from "./redux/actions/auth/loginActions"
import {is_session,fake_session} from "./redux/actions/auth/index"
import { ToastContainer } from "react-toastify"
import {LOGIN_URL , SIGNUP_URL} from "./urls"
import "react-toastify/dist/ReactToastify.css"
import "./assets/scss/plugins/extensions/toastr.scss"

  //auth
    const Home = lazy(() => import("./views/pages/Home"));
    const SignIn = lazy(() => import("./views/auth/Login.js"));
    const SignUp = lazy(() => import("./views/auth/Signup.js"));

    const AnalyTics = lazy(()=> import("./views/dashboard/analytics"));

    const NetUsers = lazy(()=> import("./views/affiliate-network/users/users"));
      const Account = lazy(()=> import("./views/affiliate-network/users/userview/Account"));
      const Commission_Plan = lazy(()=> import("./views/affiliate-network/users/userview/Commission_Plan"));
      const Logs = lazy(()=> import("./views/affiliate-network/users/userview/Logs"));
      const Bonus_Costs = lazy(()=> import("./views/affiliate-network/users/userview/Bonus_Costs"));
      const Permission = lazy(()=> import("./views/affiliate-network/users/userview/Permission"));
      const Marketing_Source = lazy(()=> import("./views/affiliate-network/users/userview/Marketing_Source"));
      const Landing_Pages = lazy(()=> import("./views/affiliate-network/users/userview/Landing_Pages"));
      const Actove_Media = lazy(()=> import("./views/affiliate-network/users/userview/Actove_Media"));
      const Wallet_Logs = lazy(()=> import("./views/affiliate-network/users/userview/Wallet_Logs"));
      const Taxes = lazy(()=> import("./views/affiliate-network/users/userview/Taxes"));
      const Taxes_Logs = lazy(()=> import("./views/affiliate-network/users/userview/Taxes_Logs"));
      const Carry_Over_Logs = lazy(()=> import("./views/affiliate-network/users/userview/Carry_Over_Logs"));
    const NetGroup = lazy(()=> import("./views/affiliate-network/group/affiliate-group"));
    const NetDelete = lazy(()=> import("./views/affiliate-network/delete/affiliate-delete"));
    
    const ActivePlayer = lazy(()=> import("./views/affiliate-player/activePlayer/users"));
    const AddedPlayer = lazy(()=> import("./views/affiliate-player/addedPlayer/users"));
    const BlockedPlayer = lazy(()=> import("./views/affiliate-player/blockedPlayer/users"));
    const TransferedPlayer = lazy(()=> import("./views/affiliate-player/transferedPlayer/users"));

    const LinkCreator = lazy(()=> import("./views/affilidate-tools/linkCreator/users"));
    const MarketingSource = lazy(()=> import("./views/affilidate-tools/marketingSource/users"));
    const LandingPage = lazy(()=> import("./views/affilidate-tools/landingPage/users"));
    const MediaLibrary = lazy(()=> import("./views/affilidate-tools/medialibrary/media_library"));
      const MyMedia = lazy(()=> import("./views/affilidate-tools/medialibrary/my_media"));
      const ActiveMedia = lazy(()=> import("./views/affilidate-tools/medialibrary/active_media"));
      const FavoriteMedia = lazy(()=> import("./views/affilidate-tools/medialibrary/favorite_media"));
      const ChildMedia = lazy(()=> import("./views/affilidate-tools/medialibrary/child_media"));
    
    const Socialshare = lazy(()=> import("./views/affilidate-tools/socialshare/socialshare"));
    const DataFeedJson = lazy(()=> import("./views/affilidate-tools/datafeed/json"));
    const DataFeedXml = lazy(()=> import("./views/affilidate-tools/datafeed/xml"));
    const SubUserRequest = lazy(()=> import("./views/affilidate-Withdawals/SubUserRequest"));
    
    const Products = lazy(()=>import('./views/affilidate-reports/products/products'));
    const Users = lazy(()=>import('./views/affilidate-reports/products/users'));
    const Players = lazy(()=>import('./views/affilidate-reports/products/player'));

    const MarketingSources = lazy(()=>import('./views/affilidate-reports/marketing/marketingsource'));
    const LinkStatistics = lazy(()=>import('./views/affilidate-reports/marketing/linkstatistics'));
    const Media = lazy(()=>import('./views/affilidate-reports/marketing/media'));

    const Wallet = lazy(()=>import('./views/affilidate-reports/wallet/wallet'));
    const Subuser = lazy(()=>import('./views/affilidate-reports/subuser/subuser'));
    const Referral = lazy(()=>import('./views/affilidate-reports/referral/referral'));
    const Monthly = lazy(()=>import('./views/affilidate-reports/monthly/monthly'));
    const RevenueBreakDown = lazy(()=>import('./views/affilidate-reports/revenuebreakdown/revenuebreakdown'));

    const Filter = lazy(()=>import('./views/affilidate-filters/filter'));

    const NewsLetter = lazy(()=>import('./views/affilidate-newsletter/newsletter'));

    const ConfigProduct = lazy(()=>import('./views/affilidate-configuration/product/product'));
    const ConfigCommissionPlan = lazy(()=>import('./views/affilidate-configuration/commission-plan/commission-plan'));
    const ConfigContributionCost = lazy(()=>import('./views/affilidate-configuration/contribution-costs/contribution-costs'));
    const ConfigCurrency = lazy(()=>import('./views/affilidate-configuration/currency/currency'));
    const ConfigDomainName = lazy(()=>import('./views/affilidate-configuration/domain-name/domain-name'));
    const ConfigLanguage = lazy(()=>import('./views/affilidate-configuration/language/language'));
    const ConfigMailTemplate = lazy(()=>import('./views/affilidate-configuration/mail-template/mail-template'));
    const ConfigMetaTags = lazy(()=>import('./views/affilidate-configuration/meta-tags/meta-tags'));
    const ConfigPaymentMethod = lazy(()=>import('./views/affilidate-configuration/payment-method/payment-method'));
    const ConfigPermission = lazy(()=>import('./views/affilidate-configuration/permission/permission'));
    const ConfigSocial = lazy(()=>import('./views/affilidate-configuration/social/social'));

    const comingsoonpage = lazy(() => import("./views/commingsoon/index"));
    const Icon = lazy(() => import("./views/icon/icon"));

  const RouteConfig = ({ component: Component, fullLayout,newfullLayout, ...rest }) => (
    <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true ? context.fullLayout : context.state.activeLayout === "horizontal" ? context.horizontalLayout : context.VerticalLayout
            if(fullLayout !== true)
            {
              LayoutTag = newfullLayout === true ? context.newfullLayout : context.state.activeLayout === "horizontal" ? context.horizontalLayout : context.VerticalLayout
            }
            return (
              <LayoutTag {...props} permission={"admin"}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)

const AppRoute = connect(null)(RouteConfig)

const RequireAuth = (data) => {
  if (!is_session()) {
    fake_session();
    return <Redirect to={LOGIN_URL} />;
  }
  for(var i in data.children){
    if(data.children[i].props.path ===data.location.pathname){
      return data.children.slice(0, data.children.length-1);
    }
  }
  return data.children.slice(data.children.length-1, data.children.length);
};

class AppRouter extends React.Component {
  UNSAFE_componentWillMount(){
    if(is_session()){
      this.props.session_checked();
    }else{
      // if(url_path() !== "/home" && url_path() !== "/signin" && url_path() !== "/signup" ){
      //   window.location.href="/home";
      // }
    }
  }
  render(){
    return (  

      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>
          <AppRoute path="/home" component={Home} newfullLayout/>
          <AppRoute path={LOGIN_URL} component={SignIn} newfullLayout/>
          <AppRoute path={SIGNUP_URL} component={SignUp} newfullLayout/>
          <RequireAuth>
            <AppRoute exact  path="/" component={AnalyTics} />
            <AppRoute path="/dashboard" component={AnalyTics } />

            <AppRoute path="/Network/Users/Account" component={Account } />
            <AppRoute path="/Network/Users/Commission-Plan" component={Commission_Plan } />
            <AppRoute path="/Network/Users/Logs" component={Logs } />
            <AppRoute path="/Network/Users/Bonus-Costs" component={Bonus_Costs } />
            <AppRoute path="/Network/Users/Permission" component={Permission } />
            <AppRoute path="/Network/Users/Marketing-Source" component={Marketing_Source } />
            <AppRoute path="/Network/Users/Landing-Pages" component={Landing_Pages } />
            <AppRoute path="/Network/Users/Actove-Media" component={Actove_Media } />
            <AppRoute path="/Network/Users/Wallet-Logs" component={Wallet_Logs } />
            <AppRoute path="/Network/Users/Taxes" component={Taxes } />
            <AppRoute path="/Network/Users/Taxes-Logs" component={Taxes_Logs } />
            <AppRoute path="/Network/Users/Carry-Over-Logs" component={Carry_Over_Logs } />
            <AppRoute path="/Network/Users" component={NetUsers } />

            <AppRoute path="/Network/Groups" component={NetGroup } />
            <AppRoute path="/Network/DeletedUsers" component={NetDelete } />

            <AppRoute path="/player/activePlayer" component={ActivePlayer } />
            <AppRoute path="/player/addedPlayer" component={AddedPlayer } />
            <AppRoute path="/player/blockedPlayer" component={BlockedPlayer } />
            <AppRoute path="/player/transfredPlayer" component={TransferedPlayer } />

            <AppRoute path="/Toolbox/linkCreator" component={LinkCreator } />
            <AppRoute path="/Toolbox/MarkettingSources" component={MarketingSource } />
            <AppRoute path="/Toolbox/LandingPages" component={LandingPage } />

            <AppRoute path="/Toolbox/MediaLibrary/Media-Library" component={MediaLibrary } />
            <AppRoute path="/Toolbox/MediaLibrary/My-Media" component={MyMedia } />
            <AppRoute path="/Toolbox/MediaLibrary/Active-Media" component={ActiveMedia } />
            <AppRoute path="/Toolbox/MediaLibrary/Favorite-Media" component={FavoriteMedia } />
            <AppRoute path="/Toolbox/MediaLibrary/Child-Media" component={ChildMedia } />

            <AppRoute path="/Toolbox/Socialshare" component={Socialshare } />
            <AppRoute path="/Toolbox/DataFeed/json" component={DataFeedJson } />
            <AppRoute path="/Toolbox/DataFeed/xml" component={DataFeedXml } />

            <AppRoute path="/Withdawals/SubUserRequest" component={SubUserRequest } />

            <AppRoute path="/Reports/Products" component={Products } />
            <AppRoute path="/Reports/Players" component={Players } />
            <AppRoute path="/Reports/Users" component={Users } />

            <AppRoute path="/Reports/Marketing-Sources" component={MarketingSources } />
            <AppRoute path="/Reports/Links-statistics" component={LinkStatistics } />
            <AppRoute path="/Reports/Media" component={Media } />

            <AppRoute path="/Reports/Wallet" component={Wallet } />
            <AppRoute path="/Reports/SubUsers" component={Subuser } />
            <AppRoute path="/Reports/Referral" component={Referral } />
            <AppRoute path="/Reports/Monthly" component={Monthly } />
            <AppRoute path="/Reports/RevenueBreakdown" component={RevenueBreakDown } />

            <AppRoute path="/Filters" component={Filter } />

            <AppRoute path="/Newsletter" component={NewsLetter } />

            <AppRoute path="/Configrations/Products" component={ConfigProduct } />
            <AppRoute path="/Configrations/CommissionPlan" component={ConfigCommissionPlan } />
            <AppRoute path="/Configrations/ContributionCost" component={ConfigContributionCost } />
            <AppRoute path="/Configrations/Currency" component={ConfigCurrency } />
            <AppRoute path="/Configrations/DomainName" component={ConfigDomainName } />
            <AppRoute path="/Configrations/Language" component={ConfigLanguage } />
            <AppRoute path="/Configrations/MailTemplate" component={ConfigMailTemplate } />
            <AppRoute path="/Configrations/MetaTags" component={ConfigMetaTags } />
            <AppRoute path="/Configrations/PaymentMethod" component={ConfigPaymentMethod } />
            <AppRoute path="/Configrations/Permission" component={ConfigPermission } />
            <AppRoute path="/Configrations/Social" component={ConfigSocial } />

            <AppRoute path="/icon" component={Icon } />

            <AppRoute component={comingsoonpage} />

          </RequireAuth>
        </Switch>
        <ToastContainer />
      </Router>
    )
  }
}

export default connect(null,{session_checked})(AppRouter)