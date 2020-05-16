import React from 'react';
import { View } from 'react-native';
import styles from'./HomeScreen.styles';
import NewsCardComponent from '../../components/NewsCardComponent/NewsCard.component'

export default HomeScreen = () => {
    const category = 'fußball';
    const title='Gelten gleiche Regeln für alle?'
    const description='Organisatorisch kann Fußball in der Pandemie funktionieren. Wenn die Bundesliga nun wieder startet, stellt sich aber die Kernfrage des Sports: die nach Gerechtigkeit'
    return (
        <View style={styles.viewContainer}>
            <NewsCardComponent
                category={category}
                title={title}
                description={description}
            />
        </View>
    );
}