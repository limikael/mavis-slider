let mqtt;

function onConnect() {
	console.log("connect...");
}

function onError(e) {
	console.log("There is an error...");
}

function onGreenToggleChange() {
	let checked=$("#greenToggle").is(":checked");

	if (checked)
		mqtt.publish("mavis","green on");

	else
		mqtt.publish("mavis","green off");
}

function onTargetRangeChange() {
	let target=$("#targetRange").val();

	mqtt.publish("mavis","target "+target);
}

function main() {
	$("#greenToggle").change(onGreenToggleChange);
	$("#targetRange").change(onTargetRangeChange);

	mqtt=new Paho.Client("postman.cloudmqtt.com",33342,"MavisController");

	var options = {
		useSSL: true,
		userName: "hbpiywwf",
		password: "q6YEkRNQwT4x",
		onSuccess: onConnect,
		onFailure: onError
	}

	mqtt.connect(options);
}

$(document).ready(main);
