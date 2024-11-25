import { Client, Account, ID } from 'react-native-appwrite';

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.mczencz.coffeeapp',
  projectId: '6744010a001f68ebb045',
  databaseId: '674402c500057971c093',
  userCollectionId: '674402e70008efdfa123',
  storageId: '674403bc0028380d8df9',
}

const client = new Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);

const account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), '', '', '')
    .then((res) => console.log(res), (error) => console.log(error));
}