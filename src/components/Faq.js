import React from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQs",
  rows: [
    {
      title: "Czym jest FindActive?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. `
    },
    {
      title: "Jak rozpocząć wyszukiwanie obiektów?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci."
    },
    {
      title: "Czy korzystanie z FindActive jest darmowe?",
      content: `Nam congue, pede vitae dapibus aliquet, elit magna vulputate arcu, vel tempus metus leo non est. Etiam sit amet lectus quis est congue mollis. Phasellus congue lacus eget neque. Phasellus ornare, ante vitae consectetuer consequat, purus sapien ultricies dolor, et mollis pede metus eget nisi. Praesent sodales velit quis augue. Cras suscipit, urna at aliquam rhoncus, urna quam viverra nisi, in interdum massa nibh nec erat. `
    },
    {
      title: "Które obiekty sportowe są najlepsze?",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ]
};

const styles = {
  titleTextColor: "#004E64",
  rowTitleColor: "#004E64",
  rowContentColor: "#004E64",
  bgColor: "#9FFFCB"
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Faq data={data} styles={styles} />
      </div>
    );
  }
}
