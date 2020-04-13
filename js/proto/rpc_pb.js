// source: rpc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = require('./github.com/gogo/protobuf/gogoproto/gogo_pb.js');
goog.object.extend(proto, github_com_gogo_protobuf_gogoproto_gogo_pb);
var tendermint_pb = require('./tendermint_pb.js');
goog.object.extend(proto, tendermint_pb);
var validator_pb = require('./validator_pb.js');
goog.object.extend(proto, validator_pb);
var bcm_pb = require('./bcm_pb.js');
goog.object.extend(proto, bcm_pb);
goog.exportSymbol('proto.rpc.ResultStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.rpc.ResultStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.rpc.ResultStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.rpc.ResultStatus.displayName = 'proto.rpc.ResultStatus';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.rpc.ResultStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.rpc.ResultStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.rpc.ResultStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rpc.ResultStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    chainid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    runid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    burrowversion: jspb.Message.getFieldWithDefault(msg, 3, ""),
    genesishash: msg.getGenesishash_asB64(),
    nodeinfo: (f = msg.getNodeinfo()) && tendermint_pb.NodeInfo.toObject(includeInstance, f),
    syncinfo: (f = msg.getSyncinfo()) && bcm_pb.SyncInfo.toObject(includeInstance, f),
    catchingup: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    validatorinfo: (f = msg.getValidatorinfo()) && validator_pb.Validator.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.rpc.ResultStatus}
 */
proto.rpc.ResultStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.rpc.ResultStatus;
  return proto.rpc.ResultStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.rpc.ResultStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.rpc.ResultStatus}
 */
proto.rpc.ResultStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChainid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBurrowversion(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setGenesishash(value);
      break;
    case 5:
      var value = new tendermint_pb.NodeInfo;
      reader.readMessage(value,tendermint_pb.NodeInfo.deserializeBinaryFromReader);
      msg.setNodeinfo(value);
      break;
    case 6:
      var value = new bcm_pb.SyncInfo;
      reader.readMessage(value,bcm_pb.SyncInfo.deserializeBinaryFromReader);
      msg.setSyncinfo(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCatchingup(value);
      break;
    case 7:
      var value = new validator_pb.Validator;
      reader.readMessage(value,validator_pb.Validator.deserializeBinaryFromReader);
      msg.setValidatorinfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.rpc.ResultStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.rpc.ResultStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.rpc.ResultStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.rpc.ResultStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChainid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRunid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBurrowversion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGenesishash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getNodeinfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tendermint_pb.NodeInfo.serializeBinaryToWriter
    );
  }
  f = message.getSyncinfo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      bcm_pb.SyncInfo.serializeBinaryToWriter
    );
  }
  f = message.getCatchingup();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getValidatorinfo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      validator_pb.Validator.serializeBinaryToWriter
    );
  }
};


/**
 * optional string ChainID = 1;
 * @return {string}
 */
proto.rpc.ResultStatus.prototype.getChainid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.rpc.ResultStatus} returns this
 */
proto.rpc.ResultStatus.prototype.setChainid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string RunID = 2;
 * @return {string}
 */
proto.rpc.ResultStatus.prototype.getRunid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.rpc.ResultStatus} returns this
 */
proto.rpc.ResultStatus.prototype.setRunid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string BurrowVersion = 3;
 * @return {string}
 */
proto.rpc.ResultStatus.prototype.getBurrowversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.rpc.ResultStatus} returns this
 */
proto.rpc.ResultStatus.prototype.setBurrowversion = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bytes GenesisHash = 4;
 * @return {!(string|Uint8Array)}
 */
proto.rpc.ResultStatus.prototype.getGenesishash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes GenesisHash = 4;
 * This is a type-conversion wrapper around `getGenesishash()`
 * @return {string}
 */
proto.rpc.ResultStatus.prototype.getGenesishash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getGenesishash()));
};


/**
 * optional bytes GenesisHash = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getGenesishash()`
 * @return {!Uint8Array}
 */
proto.rpc.ResultStatus.prototype.getGenesishash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getGenesishash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.rpc.ResultStatus} returns this
 */
proto.rpc.ResultStatus.prototype.setGenesishash = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional tendermint.NodeInfo NodeInfo = 5;
 * @return {?proto.tendermint.NodeInfo}
 */
proto.rpc.ResultStatus.prototype.getNodeinfo = function() {
  return /** @type{?proto.tendermint.NodeInfo} */ (
    jspb.Message.getWrapperField(this, tendermint_pb.NodeInfo, 5));
};


/**
 * @param {?proto.tendermint.NodeInfo|undefined} value
 * @return {!proto.rpc.ResultStatus} returns this
*/
proto.rpc.ResultStatus.prototype.setNodeinfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rpc.ResultStatus} returns this
 */
proto.rpc.ResultStatus.prototype.clearNodeinfo = function() {
  return this.setNodeinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rpc.ResultStatus.prototype.hasNodeinfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bcm.SyncInfo SyncInfo = 6;
 * @return {?proto.bcm.SyncInfo}
 */
proto.rpc.ResultStatus.prototype.getSyncinfo = function() {
  return /** @type{?proto.bcm.SyncInfo} */ (
    jspb.Message.getWrapperField(this, bcm_pb.SyncInfo, 6));
};


/**
 * @param {?proto.bcm.SyncInfo|undefined} value
 * @return {!proto.rpc.ResultStatus} returns this
*/
proto.rpc.ResultStatus.prototype.setSyncinfo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rpc.ResultStatus} returns this
 */
proto.rpc.ResultStatus.prototype.clearSyncinfo = function() {
  return this.setSyncinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rpc.ResultStatus.prototype.hasSyncinfo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool CatchingUp = 8;
 * @return {boolean}
 */
proto.rpc.ResultStatus.prototype.getCatchingup = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.rpc.ResultStatus} returns this
 */
proto.rpc.ResultStatus.prototype.setCatchingup = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional validator.Validator ValidatorInfo = 7;
 * @return {?proto.validator.Validator}
 */
proto.rpc.ResultStatus.prototype.getValidatorinfo = function() {
  return /** @type{?proto.validator.Validator} */ (
    jspb.Message.getWrapperField(this, validator_pb.Validator, 7));
};


/**
 * @param {?proto.validator.Validator|undefined} value
 * @return {!proto.rpc.ResultStatus} returns this
*/
proto.rpc.ResultStatus.prototype.setValidatorinfo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.rpc.ResultStatus} returns this
 */
proto.rpc.ResultStatus.prototype.clearValidatorinfo = function() {
  return this.setValidatorinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.rpc.ResultStatus.prototype.hasValidatorinfo = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.rpc);
