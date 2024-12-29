import React, { useState } from 'react';
import {Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';

import FacilitiesStyles from '../styles/FacilitiesStyles';

function FacilitiesScreen({ navigation }) {
  const [SelectedFacilities, SetSelectedFacilities] = useState([]); // مصفوفة للاختيار المتعدد

  const facilities = [
    { id: '1', name: 'Nursing' },
    { id: '2', name: 'Sciences' },
    { id: '3', name: 'Sharia' },
    { id: '4', name: 'Medicine' },
    { id: '5', name: 'Arts' },
    { id: '6', name: 'Agriculture' },
    { id: '7', name: 'Pharmacy' },
    { id: '8', name: 'Physical Education' },
    { id: '9', name: 'IT' },
    { id: '10', name: 'Business' },
    { id: '11', name: 'Languages' },
    { id: '12', name: 'Engineering' },
    { id: '13', name: 'Archeology and Tourism' },
    { id: '14', name: 'Sports Sciences' },
    { id: '15', name: 'International Studies' },
    { id: '16', name: 'Educational Sciences' },
    { id: '17', name: 'Arts and Design' },
    { id: '18', name: 'Dental' },
    { id: '19', name: 'Rehabilitation Sciences' },
    { id: '20', name: 'Rights' },
  ];

  const handleFacilitySelect = (facility) => {
    // إذا كان العنصر موجودًا بالفعل، نقوم بإزالته، وإلا نضيفه إلى المصفوفة
    if (SelectedFacilities.includes(facility.id)) {
        SetSelectedFacilities(SelectedFacilities.filter(id => id !== facility.id));
    } else {
        SetSelectedFacilities([...SelectedFacilities, facility.id]);
    }
  };

  return (
      <ScrollView contentContainerStyle={FacilitiesStyles.container}>
        <Text style={FacilitiesStyles.headerText}>Select the facilities you would prefer to receive notifications about.</Text>

        <FlatList
            data={facilities}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={[
                        FacilitiesStyles.FacilityItem,
                        SelectedFacilities.includes(item.id) && FacilitiesStyles.selectedFacility, // إضافة النمط إذا كان العنصر مختار
                    ]}
                    onPress={() => handleFacilitySelect(item)}
                >
                  <Text style={FacilitiesStyles.facilityText}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />

        <TouchableOpacity
            style={FacilitiesStyles.button}
            onPress={() => navigation.navigate('Home')}
        >
          <Text style={FacilitiesStyles.buttonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
  );
}
export default FacilitiesScreen;
