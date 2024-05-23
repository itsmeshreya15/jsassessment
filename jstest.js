/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTContainer = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name ,country , style , height , age) {
    let NFT = {
        name: name,
        country: country,
        style: style,
        height: height,
        age: age,
    }
    NFTContainer.push(NFT);
   console.log("Minted "+ name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTContainer.length; i++) {
        console.log("\n\n--VOGUE MODELS--\n\n" );
        console.log("Name: " + NFTContainer[i].name);
        console.log("Country: " + NFTContainer[i].country);
        console.log("Style: " + NFTContainer[i].style);
        console.log("Height: " + NFTContainer[i].height);
        console.log("Age: " + NFTContainer[i].age)
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("total number of NFTs are - :" + NFTContainer.length);

}

// call your functions below this line
mintNFT("Kylie Jenner", "USA", "Casual-Steet-Style","1.68m"," 26");
mintNFT("Gigi Hadid", "California", "All-whites","1.8m"," 29");
mintNFT("Kendall Jenner", "Los Angeles", "Minimalist street style","1.8m","28");
mintNFT("Cara Delevingne", "London", "Tomboy"," 1,78"," 31");
listNFTs();
getTotalSupply();
