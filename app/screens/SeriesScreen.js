import React, { useEffect, useState } from 'react';
import {SafeAreaView,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme, Button } from 'react-native-paper';
import api from '../api/tmdbApi';
import FlatListSmallTV from '../components/flatlist/FlatListSmallTV';

const SeriesScreen = ({ navigation }) => {
  const theme = useTheme();

  const [dramaSeries, setDramaSeries] = useState([]);
  const [actionSeries, setActionSeries] = useState([]);
  const [crimeSeries, setCrimeSeries] = useState([]);
  useEffect(() => {
    (async () => {
      const drama = await api.getTVSeries('10765');
      setDramaSeries(drama);
      const action = await api.getTVSeries('18');
      setActionSeries(action);
      const crime = await api.getTVSeries('80');
      setCrimeSeries(crime);
    })();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.surface }}>
      <ScrollView>
        <FlatListSmallTV navigation={navigation} data={actionSeries} heading="action" />
        <FlatListSmallTV navigation={navigation} data={crimeSeries} heading="crime" />
        <FlatListSmallTV navigation={navigation} data={dramaSeries} heading="drama" />
        <Button>Show more...</Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeriesScreen;
