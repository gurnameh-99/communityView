/* eslint-disable quotes */
import React from 'react';
import {View, StyleSheet, Share, Linking} from 'react-native';

import styled from 'styled-components/native';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Collapsible from 'react-native-collapsible';

import Avatar from './User';
import Card from './Card';

const Container = styled.View`
  flex: 1;
`;

const Comments = styled.View`
  padding: 5px;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;
const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;
const User = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
`;
const Time = styled.Text`
  font-size: 9px;
  color: #747476;
`;
const Post = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;
const Photo = styled.Image`
  margin-top: 9px;
  width: 100%;
  height: 300px;
`;
const Footer = styled.View`
  padding: 0 11px;
`;
const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const IconCount = styled.View`
  background: #1878f3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;
const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
`;
const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: #f9f9f9;
`;
const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const Button = styled.TouchableOpacity`
  flex-direction: row;
`;
const Icon = styled.View`
  margin-right: 6px;
`;
const Text = styled.Text`
  font-size: 12px;
  color: #424040;
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #f0f2f5;
`;
const Input = styled.TextInput`
  border-width: 1px;
  border-color: #777;
  border-radius: 15px;
  padding: 8px;
  margin: 10px;
  width: 80%;
  color: #777;
`;

const Feed = () => {
  const [likeCount, setLikeCount] = React.useState({a: 50, b: 25});
  const [like1, setLike1] = React.useState(false);
  const [like2, setLike2] = React.useState(false);
  const [isComments, setIsComments] = React.useState(false);
  const [isComments2, setIsComments2] = React.useState(false);
  const [comments1, setComments1] = React.useState([
    {name: 'andy', comment: 'A very Good Post', key: '1'},
    {name: 'edward', comment: 'A very Good Post', key: '2'},
  ]);
  const [comments2, setComments2] = React.useState([
    {name: 'john', comment: 'A very Good Post', key: '1'},
    {name: 'mellisa', comment: 'A very Good Post', key: '2'},
  ]);
  const toggle1 = React.useCallback(() => {
    setLike1(!like1);
    if (!like1) {
      setLikeCount({a: likeCount.a + 1, b: likeCount.b});
    } else {
      setLikeCount({a: likeCount.a - 1, b: likeCount.b});
    }
  }, [like1, likeCount]);
  const toggle2 = React.useCallback(() => {
    setLike2(!like2);
    if (!like2) {
      setLikeCount({a: likeCount.a, b: likeCount.b + 1});
    } else {
      setLikeCount({a: likeCount.a, b: likeCount.b - 1});
    }
  }, [like2, likeCount]);
  const toggleComment1 = React.useCallback(() => {
    setIsComments(!isComments);
    setComment('');
  }, [isComments]);
  const toggleComment2 = React.useCallback(() => {
    setIsComments2(!isComments2);
    setComment('');
  }, [isComments2]);
  const [comment, setComment] = React.useState();
  const [comment2, setComment2] = React.useState();
  const changeHandler = React.useCallback(val => {
    setComment(val);
  }, []);
  const changeHandler2 = React.useCallback(val => {
    setComment2(val);
  }, []);
  const addComent = React.useCallback(() => {
    if (comment !== null && comment !== '') {
      setComments1(prev => {
        console.log(prev);
        return [
          ...prev,
          {name: 'you', comment: comment, key: Math.random().toString()},
        ];
      });
      setComment('');
    }
  }, [comment]);
  const addComent2 = React.useCallback(() => {
    if (comment2 !== null && comment2 !== '') {
      setComments2(prev => {
        console.log(prev);
        return [
          ...prev,
          {name: 'you', comment: comment2, key: Math.random().toString()},
        ];
      });
      setComment2('');
    }
  }, [comment2]);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Hey Check my Post on community section on Hert.AI website link: https://www.hertzai.com/',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <Row>
            <Avatar source={require('../assets/user1.png')} />
            <View style={{paddingLeft: 10}}>
              <User>Regi P</User>
              <Row>
                <Time>9m</Time>
                <Entypo name="dot-single" size={12} color="#747476" />
                <Entypo name="globe" size={10} color="#747476" />
              </Row>
            </View>
          </Row>

          <Entypo name="dots-three-horizontal" size={15} color="#222121" />
        </Header>

        <Post>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Post>
        <Photo source={require('../assets/posts1.jpeg')} />

        <Footer>
          <FooterCount>
            <Row>
              <IconCount>
                <AntDesign name="like1" size={12} color="#FFFFFF" />
              </IconCount>
              <TextCount>{likeCount.a} likes</TextCount>
            </Row>
            <TextCount>{comments1.length} comments</TextCount>
          </FooterCount>

          <Separator />

          <FooterMenu>
            <Button onPress={toggle1}>
              <Icon>
                {like1 ? (
                  <AntDesign name="like1" size={20} color="#424040" />
                ) : (
                  <AntDesign name="like2" size={20} color="#424040" />
                )}
              </Icon>
              <Text>Like</Text>
            </Button>

            <Button onPress={toggleComment1}>
              <Icon>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={20}
                  color="#424040"
                />
              </Icon>
              <Text>Comment</Text>
            </Button>

            <Button onPress={onShare}>
              <Icon>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={20}
                  color="#424040"
                />
              </Icon>
              <Text>Share</Text>
            </Button>
          </FooterMenu>
        </Footer>
        <Collapsible collapsed={!isComments}>
          <Comments>
            {comments1.map(item => {
              return (
                <Card key={item.key}>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.comment}>{item.comment}</Text>
                </Card>
              );
            })}
          </Comments>
          <View style={styles.addComment}>
            <Row>
              <Input
                placeholder="Add a Comment"
                onChangeText={changeHandler}
                value={comment}
                placeholderTextColor="grey"
              />

              <Button onPress={addComent}>
                <View style={styles.button}>
                  <Text style={styles.post}>Post</Text>
                </View>
              </Button>
            </Row>
          </View>
        </Collapsible>
        <BottomDivider />
      </Container>

      <Container>
        <Header>
          <Row>
            <Avatar source={require('../assets/user1.png')} />
            <View style={{paddingLeft: 10}}>
              <User>Wanessa J</User>
              <Row>
                <Time>9m</Time>
                <Entypo name="dot-single" size={12} color="#747476" />
                <Entypo name="globe" size={10} color="#747476" />
              </Row>
            </View>
          </Row>

          <Entypo name="dots-three-horizontal" size={15} color="#222121" />
        </Header>

        <Post>Post user</Post>
        <Photo source={require('../assets/posts1.jpeg')} />

        <Footer>
          <FooterCount>
            <Row>
              <IconCount>
                <AntDesign name="like1" size={12} color="#FFFFFF" />
              </IconCount>
              <TextCount>{likeCount.b} likes</TextCount>
            </Row>
            <TextCount>{comments2.length} comments</TextCount>
          </FooterCount>

          <Separator />

          <FooterMenu>
            <Button onPress={toggle2}>
              <Icon>
                {like2 ? (
                  <AntDesign name="like1" size={20} color="#424040" />
                ) : (
                  <AntDesign name="like2" size={20} color="#424040" />
                )}
              </Icon>
              <Text>Like</Text>
            </Button>

            <Button onPress={toggleComment2}>
              <Icon>
                <MaterialCommunityIcons
                  name="comment-outline"
                  size={20}
                  color="#424040"
                />
              </Icon>
              <Text>Comment</Text>
            </Button>

            <Button onPress={onShare}>
              <Icon>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={20}
                  color="#424040"
                />
              </Icon>
              <Text>Share</Text>
            </Button>
          </FooterMenu>
        </Footer>
        <Collapsible collapsed={!isComments2} autofocus={true}>
          <Comments>
            {comments2.map(item => {
              return (
                <Card key={item.key}>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.comment}>{item.comment}</Text>
                </Card>
              );
            })}
          </Comments>
          <View style={styles.addComment}>
            <Row>
              <Input
                placeholder="Add a Comment"
                onChangeText={changeHandler2}
                value={comment2}
                placeholderTextColor="grey"
              />

              <Button onPress={addComent2}>
                <View style={styles.button}>
                  <Text style={styles.post}>Post</Text>
                </View>
              </Button>
            </Row>
          </View>
        </Collapsible>
        <BottomDivider />
      </Container>
      <View style={styles.made}>
        <Text onPress={() => Linking.openURL('https://www.gurnameh.tech')}>
          Made by Gurnameh with 💙{' '}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  userName: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#777',
  },
  comment: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  addComment: {
    marginHorizontal: 4,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: '#3a86e9',
  },
  post: {
    color: 'white',
  },
  made: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Feed;
