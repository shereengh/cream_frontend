import { connect } from "react-redux";
import React, { Component } from "react";

import { List, ListItem, Body, CheckBox } from "native-base";
import { Text } from "react-native";

//actions
import { setIngredients } from "../redux/actions";

class IngredientSelectList extends Component {
  state = {
    checked: []
  };

  handlePress = async ingredient => {
    let temp = this.state.checked;
    if (!temp.includes(ingredient.id)) {
      await this.setState({
        checked: [...temp, ingredient.id]
      });
    } else {
      temp = temp.filter(a => a !== ingredient.id);

      await this.setState({
        checked: [...temp]
      });
    }

    await this.props.setIngredients(this.state.checked);
  };

  render() {
    let ingredients = this.props.ingredients.map(ingredient => {
      return (
        <ListItem>
          <CheckBox
            checked={this.state.checked.includes(ingredient.id)}
            onPress={() => this.handlePress(ingredient)}
          />
          <Body>
            <Text> {ingredient.name} </Text>
          </Body>
        </ListItem>
      );
    });
    return <List>{ingredients}</List>;
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.rootIngredient.ingredients
  };
};

const mapDispatchToProps = dispatch => ({
  setIngredients: ingredients => dispatch(setIngredients(ingredients))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientSelectList);
