import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import classnames from 'classnames';
import InputLabel from '@material-ui/core/InputLabel';
import {Editor, EditorState, RichUtils} from 'draft-js';
import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';
import BlockStyleControls from './block_style_controls';
import InlineStyleControls from './inline_style_conrtols';
import './style.css';

const styles = theme => ({
    label: {       
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2,
        display: 'flex'
    },    
});

// Custom overrides for "code" style.
const styleMap = {
    CODE: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
};

function getBlockStyle(block) {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
}

class RichText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
    }
    componentWillMount(){
        const { input } = this.props;
        this.setState({editorState: EditorState.createWithContent(stateFromHTML(input.value))})
    }
    onChange = (editorState) => {
        const { input } = this.props;
        this.setState({editorState});
        input.onChange(stateToHTML(editorState.getCurrentContent()));
    };
    handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          this.onChange(newState);
          return 'handled';
        }
        return 'not-handled';
    }
    toggleBlockType = (blockType) => {
        this.onChange(
          RichUtils.toggleBlockType(
            this.state.editorState,
            blockType
          )
        );
    }
    toggleInlineStyle = (inlineStyle) => {
        this.onChange(
            RichUtils.toggleInlineStyle(
                this.state.editorState,
                inlineStyle
            )
        );
    }

    render() {
        const { id, label, classes } = this.props;
        const {editorState} = this.state;

        // If the user changes block type before entering any text, we can
          // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
              className += ' RichEditor-hidePlaceholder';
            }
        }
        return (
            <div className="cke_rtl ">
                <InputLabel className={classnames("field-label", classes.label)} htmlFor={id}>{label}</InputLabel>
                <div className="RichEditor-root">
                <BlockStyleControls
                    editorState={editorState}
                    onToggle={this.toggleBlockType}
                />
                <InlineStyleControls
                    editorState={editorState}
                    onToggle={this.toggleInlineStyle}
                />
                <div className={className} onClick={this.focus}>
                <Editor 
                    blockStyleFn={getBlockStyle}
                    customStyleMap={styleMap}
                    editorState={this.state.editorState} 
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange} 
                />
                </div>
                </div>
            </div>  
        );
    }
}

RichText.propTypes = {
    classes: PropTypes.object.isRequired,
};
export const EditorField = withStyles(styles)(RichText);
