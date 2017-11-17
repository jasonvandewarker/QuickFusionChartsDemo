<template>
	<div class="hello">
	<fusioncharts
        	:type="type"
          :dataformat="dataFormat"
        	:datasource="dataSource"
        	:width="width"
        	:height="height"
            :events="events"
          
            ref="fusioncharts"
        >
        </fusioncharts>
        <p class="message-box">The value that you have selected is: {{displayValue}} </p>
	</div>
</template>

<script>
	export default {
  name: 'hello',
  data () {
    return {
			type: 'pie3D',
						width: '500',
						height: '300',
						dataFormat: 'json',
						dataSource: {
								chart: {
										caption: 'Testing Out Fusion Charts',
										theme: 'fint'
								},
								data: [{value: 1.9}, 
											{value: 2.3}, 
											{value: 2.1}]
						},
						displayValue: 'nothing',
						events: {
								dataplotRollover: function (ev, props) {
										app.displayValue = props.displayValue       
								}       
						}
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.message-box {
		text-align: center;
		margin-top: 0px;
		background-color: #F5FBFF;
		width: 500px;
		color: #006BB8;
		padding: 5px 10px;
		box-sizing: border-box;
		border: 1px solid #B8E1FF;
}   
</style>