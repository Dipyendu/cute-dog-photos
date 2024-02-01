//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
	.then((res) => res.json()) // parse response as JSON
	.then((data) => {
		// Log the data for verification
		console.log(data);

		// Assuming there is an image element with ID "dogImage" in your HTML
		const dogImage = document.getElementById("dogImage");

		// Set the source of the image element to the dog photo URL
		dogImage.src = data.message;

		// Optionally, you can set alt text for the image
		dogImage.alt = "A cute dog";
	})
	.catch((err) => {
		console.log(`error ${err}`);
	});
