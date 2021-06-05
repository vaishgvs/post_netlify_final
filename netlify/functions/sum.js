exports.handler = async (event, context) => {
    //const num1 = event.body.First_Number;
    //const num2 = event.body.Second_Number;
    //const body = JSON.parse(event.body).payload;

    const num1 = event.body.First_Number;
    const num2 = event.body.Second_Number;
    const sum = parseInt(num1) + parseInt(num2);
    var sum2 = JSON.stringify(sum);

    /*return {
        statusCode: 200,
        body: sum2,
    };*/
    return {
      statusCode: 200,
      body: `Sum is: ` + sum2 ,
    };
  };