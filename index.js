import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {App} from './app.js';

    const mystyle = { 
  border : "thin  dotted ",
  backgroundColor:"cyan"

};
let objEmployee=[];
function cal() {
  var i;
for(i=1;i<=10;i++){
var n = 5;


objEmployee.push({
    ke:  n+" * "+i,
    va: n*i
});
}

  //alert(JSON.stringify(objEmployee));
}
cal();
let empInfo = (
    <table  className='dataa' style={mystyle} border="1">
    <tr><th>multiplrt</th><th>value</th></tr>
        {
            objEmployee.map(
                (dataa,iIndex)=>
            <tr>
                       <td>{dataa.ke}</td><td>{dataa.va}</td>
                </tr>
                    
             
            )
        }
    </table>
);


render(empInfo , document.getElementById('root'));


//render(<App />, document.getElementById('root'));
