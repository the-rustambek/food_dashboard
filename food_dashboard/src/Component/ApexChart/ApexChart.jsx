import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";

function ApexChart(){
  const series= [44,   67, 83];
  const backgroundColor= [
    'rgba(0, 0, 0)',
    'rgba(0, 1, 0)',
    'rgba(0, 0, 0)',
  ];
  const options= {
    
    chart: {
      height: 350,
      type: 'radialBar',
   
    },
   
    plotOptions: {
      
      radialBar: {
        
        dataLabels: {
          
          name: {
            fontSize: '22px',
            
          },
          value: {
            
            fontSize: '16px',
          },

          total: {
            
            show: true,
            label: 'Total',
            formatter: function (w) {
              return 249
            }
          }
        }
      }
    },

    labels: ['Dine In', 'To Go', 
    'Delivery'],
  };
   return(
     <>
       <ReactApexChart options={options}  
       series={series} type="radialBar"
        height={350} />
     </>
   )
}
export default ApexChart;