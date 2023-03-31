import { useState } from 'react';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { Container } from './styles';
import { FlatList } from 'react-native';

export function Groups() {
  const [groups, setGroups] = useState(['Rocket guys', 'Friends']);


  return (
    <Container>
      <Header />
      
      <Highlight
        title="Teams"
        subtitle="Play with your team"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard
            title={item}
          />
        )}
      />
    </Container>
  );
}
