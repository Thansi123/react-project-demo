// src/services/investmentService.js
import { db } from '../firebase'; // Import from your updated firebase.js
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Save investment to Firestore
export const saveInvestment = async (investmentData) => {
  try {
    console.log('Saving investment data:', investmentData);
    
    const docRef = await addDoc(collection(db, 'investments'), {
      mobileNumber: investmentData.mobileNumber,
      investmentAmount: investmentData.investmentAmount,
      profitShare: investmentData.profitShare,
      createdAt: serverTimestamp(),
      status: 'pending'
    });
    
    console.log('Investment saved successfully with ID: ', docRef.id);
    return docRef.id;
    
  } catch (error) {
    console.error('Error saving investment: ', error);
    throw new Error('Failed to save investment: ' + error.message);
  }
};