import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

type AccordionProps = {
  title: string;
  description: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [heightAnimation] = useState<Animated.Value>(new Animated.Value(0));

  const toggleAccordion = () => {
    if (expanded) {
      Animated.timing(heightAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      setExpanded(true);
      Animated.timing(heightAnimation, {
        toValue: 100, // Adjust based on content height
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </TouchableOpacity>
      {expanded && (
        <Animated.View style={[styles.contentContainer, { height: heightAnimation }]}>
          <View style={styles.contentText}>
            <Text style={styles.desTitle}>Visa Information</Text>
            <Text>{description}</Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
  },
  titleContainer: {
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    overflow: 'hidden',
    padding: 10,
    backgroundColor: '#e9e9e9',
  },
  contentText: {
    fontSize: 14,
  },
  desTitle:{
      fontSize: 20,
      fontWeight: 400
  },
});

export default Accordion;
