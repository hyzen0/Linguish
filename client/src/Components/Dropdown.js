import _ from 'lodash'
import React from 'react'
import { Dropdown } from 'semantic-ui-react'


function Dropdownmain ({items}) {
    const stateOptions = _.map(items.state, (state, index) => ({
    key: items.state_abbr[index],
    text: state,
    value: items.state_abbr[index],
    }))
    {items.map((item,i)=>({
     text: items.class   
    }))}

  return(
  <Dropdown
    placeholder='State'
    fluid
    multiple
    search
    selection
    options={stateOptions}
  />
    );
}

export default Dropdownmain
