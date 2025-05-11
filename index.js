const core = require('@actions/core');
const github = require('@actions/github');

try 
{
    const jsNum1 = core.getInput('number1');
    const jsNum2 = core.getInput('number2');

    result = parseInt(jsNum1) + parseInt(jsNum2);
    core.setOutput("result", result);
}catch(error) 
{
    // Log the error message
    core.setFailed(`Action failed with error: ${error.message}`);
    // Optionally, you can log the stack trace for debugging
    console.error(error.stack);
    // You can also set an output variable with the error message
    core.setOutput('error', error.message);
    // If you want to fail the action with a specific exit code, you can do so
    process.exit(1);
}