export const oneCountry = (code) => {
    return `
        country(code: "${code}") {
            code name
            native
            phone
            continent {
                code
                name
            }
            capital
            currency
            languages {
                code
                name
                native
            }
            emoji
            emojiU
            states {
                code
                name
            }
        }
    `;
};

export const allCountries = () => {
    return `
        countries {
            code
            name
            emoji
            currency
            languages {
              code
              name
            }
            continent {
              name
            }
        }
    `;
};

export const allContinents = () => {
    return `
        continents {
            code
            name
        }
    `;
};

export const allLanguages = () => {
    return `
          languages {
             code 
            name
          }
    `;
};

export const allCurrencys = () => {
    return `
          currencys: countries {
              currency
          }
    `;
};

export const searchAll = (code) => {
    return `{
          forCode: countries(filter: {
              code:{
                regex: "${code}"
              }
          }){
                code
                name
                emoji
                currency
                languages {
                  name
                }
                continent {
                  name
                }
          }
          all: countries{
                code
                name
                emoji
                currency
                languages {
                  name
                }
                continent {
                  name
                }
          }
        }
        `;
};
export const allCountriesWithSearch = (querys) => {
    //console.log("NOS LLEGA ESTO A LA QUERY", querys);
    let { currency, continent } = querys;
    if (currency.length > 0 && continent.length > 0) {
        return `
          forCode: countries(
            filter: { 
                currency: { in: [${
                    Array.isArray(currency)
                        ? currency.map((c: string) => {
                              return JSON.stringify(c);
                          })
                        : JSON.stringify(currency)
                } ] },
                continent: { in: [${
                    Array.isArray(continent)
                        ? continent.map((c: string) => {
                              return JSON.stringify(c);
                          })
                        : JSON.stringify(continent)
                }] } 
            }
          ){
                code
                name
                emoji
                currency
                languages {
                  name
                }
                continent {
                  name
                }
          }
        `;
    } else if (currency.length > 0 && continent.length === 0) {
        return `
          forCode: countries(
            filter: { 
                currency: { in: [${
                    Array.isArray(currency)
                        ? currency.map((c: string) => {
                              return JSON.stringify(c);
                          })
                        : JSON.stringify(currency)
                } ] } 
            }
          ){
                code
                name
                emoji
                currency
                languages {
                  name
                }
                continent {
                  name
                }
          }
        `;
    } else if (currency.length === 0 && continent.length > 0) {
        return `
          forCode: countries(
            filter: { 
                continent: { in: [${
                    Array.isArray(continent)
                        ? continent.map((c: string) => {
                              return JSON.stringify(c);
                          })
                        : JSON.stringify(continent)
                }] } 
            }
          ){
                code
                name
                emoji
                currency
                languages {
                  name
                }
                continent {
                  name
                }
          }
        `;
    } else {
        return `
            forCode: countries{
                    code
                    name
                    emoji
                    currency
                    languages {
                      name
                    }
                    continent {
                      name
                    }
              }
            `;
    }
};
