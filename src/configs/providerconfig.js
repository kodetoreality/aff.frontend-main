


export const providerconfig = {
    "CASINO/SLOTS" : "1",
    "LIVECASINO" : "2",
    "VIRTUALGAMES" : "3"
};

export const key_providers =[
    {label : "CASINO/SLOTS",value : "1"},
    {label : "LIVECASINO",value : "2"},
    {label : "VIRTUALGAMES",value : "3"},
        // {label : "",value : "4"},
        // {label : "",value : "5"},
        // {label : "",value : "6"}
]

export const money_option = [
    { value : "1" ,label : "Fixed Monthly"},  
    {value :  "2" ,label  : "Fixed Annnual"},
    {value :  "3"  ,label : "Rake"},
    {value :  "4"  ,label : "GGR" },
    {value :  "5"  ,label : "MMG < GGR"},
]

export const value_options = {
    "1" : "Fixed Monthly",
    '2' : "Fixed Annnual",
    "3" : "Rake",
    "4" : "GGR",
    "5" : "MMG < GGR",
}

export const value_moneys = {
    "1" : "USD",
    "2" : "INR",
    "3" : "EUR",
    "4" : "%"
}

export const moneys_option = [
    {label : "USD",value : "1"},
    {label : "INR",value : "2"},
    {label : "EUR",value : "3"},
    {label : "%",value : "4"},
    
]

export    const permission_options = [
        { value: "players", label: "players" },
        { value: "superadmins", label: "superadmins" },
        { value: "agents", label: "agents" },
        { value: "admin", label: "admin" },
        { value: "affliates", label: "affliates" },
        { value: "Accounts", label: "Accounts" },
        { value: "supportstaff", label: "supportstaff" },
        { value: "staff", label: "staff" },
        // Super user 
        // admin
        //Affliates
        //Accounts
        //. Game Operators
        //6. supportstaff
        //staff
    ]
  export  const status_options = [
        { value: "allow", label: "allow" },
        { value: "pending", label: "pending" },
        { value: "block", label: "block" },
    ]

// {label : "CASINO/SLOTS",value : "1"},
// {label : "LIVECASINO",value : "2"},
// {label : "VIRTUALGAMES",value : "3"},