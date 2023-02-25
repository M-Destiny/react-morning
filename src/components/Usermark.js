import { useRef, useState } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default function Usermark(){
        const [uname , setuname] = useState('ganesh');
        const [umarks , setumarks] = useState([
            {name:'physics' , y: 0},
            {name:'chemistry' , y:0},
            {name:'maths' , y:0}
        ]);

        var txt1 = useRef();
        var txt2 = useRef();
        var txt3 = useRef();
        var err = useRef();

        const options = {
            title: {
                text: 'My chart'
            },
            series: [{
                type: 'pie',
                data: umarks 
            }]
        }
       
    function myfunc(){
        console.log('a');
        // console.log(txt1);
        var txt1data = txt1.current.value;
        var txt2data = txt2.current.value;
        var txt3data = txt3.current.value;
        
        var msg = '';
        if(txt1data=='' || txt2data=='' || txt3data == ''){
            msg = 'values must not be null';
        }
        else if(isNaN(txt1data) || isNaN(txt2data) || isNaN(txt3data)){
            msg = 'all values must in numbers';
        }
        else if(txt1data<0 || txt1data > 100 || txt2data < 0 || txt2data > 100 || txt3data < 0 || txt3data >100){
            msg = 'invalid marks';
        }
        else if(txt1data < 35 || txt2data < 35 || txt3data < 35){
            msg = "Fail";
        }
        else{
            var txt1data = +txt1data;
            var txt2data = +txt2data;
            var txt3data = +txt3data;

            var sum = txt1data + txt2data + txt3data;
            var percentage = Math.round(sum / 300 * 100);

            var passclass = '';
            if(percentage>=75){
                passclass = 'Distinction';
            }
            else if(percentage>=60 && percentage<60){
                passclass = 'First Class';
            }
            else if(percentage >=35 && percentage<60){
                passclass = 'second class';
            }
            msg = `Pass, total Marks = ${sum}/300 , Percentage = ${percentage} , ${passclass}`;
            setumarks([
                {name:'physics' , y: txt1data},
                {name:'chemistry' , y: txt2data},
                {name:'maths' , y: txt3data}
    
            ]);

        }

        setuname('ganesh subhash pawar');
       

        err.current.innerHTML = msg ;

        

    }

    return(
        <div className='container'>
         <h1>Students Marksheet</h1>
        <div className='row'>
        <div class="col-xl-8">
            <input ref={txt1} type='text' className='form-control' /><br/>
            <input ref={txt2} type='text' className='form-control' /><br/>
            <input ref={txt3} type='text' className='form-control' /><br/>
            <button onClick={myfunc}>Calculate</button>
            <p ref={err}>

            </p>
            {uname}            

        </div>
        <div className ='col-xl-4'>
            <div id="container">
            <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
            </div>
        </div>
        </div>
        </div>
    );
}