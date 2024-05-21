/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/


// using an array to hold or store all the NFTs
const NFTs = []

// to mint the NFT and store it in NFTs
function mintNFT(_NFTname,_eyeColor,_ArtistName,_bling,_dateCreation){
    const NFT = {
        'name': _NFTname,
        'eyeColor':_eyeColor,
        'artist_name':_ArtistName,
        'bling':_bling,
        'creation_date':_dateCreation
    }
    NFTs.push(NFT);
    console.log('NFT ' + _NFTname+ ' minted Successfully');
}

// Going through each NFT and their metadata through loop
function ListNFTs(){
    for(let i=0;i<NFTs.length;i++){
        console.log('\nDetails of '+ (i+1) +' th NFT');
        console.log('name: ' +NFTs[i].name);
        console.log('eyeColor: ' +NFTs[i].eyeColor);
        console.log('artist_name: ' +NFTs[i].artist_name);
        console.log('bling: ' +NFTs[i].bling);
        console.log('creation_date: ' +NFTs[i].creation_date);
    }
}

// to print number of NFTs created
function getTotalSupply(){
    console.log('\nNumber of NFTs are = ' +NFTs.length);
}

// call mintNFT function to mint the NFTs
mintNFT('coin_X','yellow','Mahajan','Diamond Necklace','19-05-2024');
mintNFT('coin_Y','red','Gupta','Gold Ring','20-05-2024');
mintNFT('coin_Z','blue','Sharma','Silver Bracelate','21-05-2024');
mintNFT('coin_W','white','Modi','platinum ring','22-05-2024');

ListNFTs();

getTotalSupply();
