// FROM https://raw.githubusercontent.com/chardmd/react-drift/master/src/Drift.jsx
import React, { Fragment } from "react";

class ChatBot extends React.Component {
  constructor(props) {
    super(props);

    this.addMainScript = this.addMainScript.bind(this);
    this.addIdentityVariables = this.addIdentityVariables.bind(this);
    this.insertScript = this.insertScript.bind(this);
  }

  insertScript(scriptText) {
    const script = document.createElement("script");
    script.innerText = scriptText;
    script.async = true;
    document.body.appendChild(script);
  }

  addMainScript() {
    const scriptText = `!function() {
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
          if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
          t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on", "setUserAttributes" ],
          t.factory = function(e) {
            return function() {
              var n = Array.prototype.slice.call(arguments);
              return n.unshift(e), t.push(n), t;
            };
          }, t.methods.forEach(function(e) {
            t[e] = t.factory(e);
          }), t.load = function(t) {
            var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
            o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
            var i = document.getElementsByTagName("script")[0];
            i.parentNode.insertBefore(o, i);
          };
        }
      }();
      drift.SNIPPET_VERSION = '0.3.1';
      drift.load('ikg6prxtmf5f');`;
    const runText = "drift.on('ready',function(api, payload) { setTimeout(function(){drift.openChat()}, 3000); });"
    this.insertScript(scriptText + runText);
  }

  addIdentityVariables() {
    let scriptText = `
      var t = window.driftt = window.drift = window.driftt || [];
      drift.identify('ikg6prxtmf5f', ${JSON.stringify(
      this.props.attributes
    )})
    `;
    this.insertScript(scriptText);
  }

  componentDidMount() {
    if (typeof window !== "undefined" && !window.drift) {
      this.addMainScript();
      this.addIdentityVariables();
    }
  }

  render() {
    return <Fragment />;
  }
}


export default ChatBot;
