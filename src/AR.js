// @flow

import { NativeModules, Platform, NativeEventEmitter } from 'react-native';
import Constants from './Constants';
const ExponentAR = NativeModules.ExponentAR || { _notPresent: true };

const emitter = new NativeEventEmitter(ExponentAR);

export const BlendShapes = {
  BrowDownL: 'browDown_L',
  BrowDownR: 'browDown_R',
  BrowInnerUp: 'browInnerUp',
  BrowOuterUpL: 'browOuterUp_L',
  BrowOuterUpR: 'browOuterUp_R',
  CheekPuff: 'cheekPuff',
  CheekSquintL: 'cheekSquint_L',
  CheekSquintR: 'cheekSquint_R',
  EyeBlinkL: 'eyeBlink_L',
  EyeBlinkR: 'eyeBlink_R',
  EyeLookDownL: 'eyeLookDown_L',
  EyeLookDownR: 'eyeLookDown_R',
  EyeLookInL: 'eyeLookIn_L',
  EyeLookInR: 'eyeLookIn_R',
  EyeLookOutL: 'eyeLookOut_L',
  EyeLookOutR: 'eyeLookOut_R',
  EyeLookUpL: 'eyeLookUp_L',
  EyeLookUpR: 'eyeLookUp_R',
  EyeSquintL: 'eyeSquint_L',
  EyeSquintR: 'eyeSquint_R',
  EyeWideL: 'eyeWide_L',
  EyeWideR: 'eyeWide_R',
  JawForward: 'jawForward',
  JawLeft: 'jawLeft',
  JawOpen: 'jawOpen',
  JawRight: 'jawRight',
  MouthClose: 'mouthClose',
  MouthDimpleL: 'mouthDimple_L',
  MouthDimpleR: 'mouthDimple_R',
  MouthFrownL: 'mouthFrown_L',
  MouthFrownR: 'mouthFrown_R',
  MouthFunnel: 'mouthFunnel',
  MouthLeft: 'mouthLeft',
  MouthLowerDownL: 'mouthLowerDown_L',
  MouthLowerDownR: 'mouthLowerDown_R',
  MouthPressL: 'mouthPress_L',
  MouthPressR: 'mouthPress_R',
  MouthPucker: 'mouthPucker',
  MouthRight: 'mouthRight',
  MouthRollLower: 'mouthRollLower',
  MouthRollUpper: 'mouthRollUpper',
  MouthShrugLower: 'mouthShrugLower',
  MouthShrugUpper: 'mouthShrugUpper',
  MouthSmileL: 'mouthSmile_L',
  MouthSmileR: 'mouthSmile_R',
  MouthStretchL: 'mouthStretch_L',
  MouthStretchR: 'mouthStretch_R',
  MouthUpperUpL: 'mouthUpperUp_L',
  MouthUpperUpR: 'mouthUpperUp_R',
  NoseSneerL: 'noseSneer_L',
  NoseSneerR: 'noseSneer_R',
};

/**
 * Plane Detection
 * Options for whether and how ARKit detects flat surfaces in captured images.
 * https://developer.apple.com/documentation/arkit/arplanedetection?language
 */
export type PlaneDetection = $Enum<{
  /**
   * No plane detection is run.
   */
  none: string,
  /**
   * Plane detection determines horizontal planes in the scene.
   */
  horizontal: string,
  /**
   * Plane detection determines vertical planes in the scene.
   */
  vertical: string,
}>;

/**
 * Plane Detection Types
 * Convenient constants
 */
export const PlaneDetectionTypes = {
  None: 'none',
  Horizontal: 'horizontal',
  Vertical: 'vertical',
};

/**
 * Hit Test Result Type
 * Possible types for specifying a hit-test search, or for the result of a hit-test search.
 * https://developer.apple.com/documentation/arkit/arhittestresulttype
 */
export type HitTestResultType = $Enum<{
  /**
   * Result type from intersecting the nearest feature point.
   */
  featurePoint: string,
  /**
   * Result type from intersecting a horizontal plane estimate, determined for the current frame.
   */
  horizontalPlane: string,
  /**
   * Result type from intersecting a vertical plane estimate, determined for the current frame.
   */
  verticalPlane: string,
  /**
   * Result type from intersecting with an existing plane anchor.
   */
  existingPlane: string,
  /**
   * Result type from intersecting with an existing plane anchor, taking into account the plane’s extent.
   */
  existingPlaneUsingExtent: string,
  /**
   * Result type from intersecting with an existing plane anchor, taking into account the plane’s geometry.
   */
  existingPlaneUsingGeometry: string,
}>;

/**
 * Hit Test Result Types
 * Convenient constants
 */
export const HitTestResultTypes = {
  FeaturePoint: 'featurePoint',
  HorizontalPlane: 'horizontalPlane',
  VerticalPlane: 'verticalPlane',
  ExistingPlane: 'existingPlane',
  ExistingPlaneUsingExtent: 'existingPlaneUsingExtent',
  ExistingPlaneUsingGeometry: 'existingPlaneUsingGeometry',
};

/**
 * World Alignment
 * Options for how ARKit constructs a scene coordinate system based on real-world device motion.
 * https://developer.apple.com/documentation/arkit/arworldalignment
 */
export type WorldAlignment = $Enum<{
  /**
   * Aligns the world with gravity that is defined by vector (0, -1, 0).
   */
  gravity: string,
  /**
   * Aligns the world with gravity that is defined by the vector (0, -1, 0)
   * and heading (w.r.t. True North) that is given by the vector (0, 0, -1).
   */
  gravityAndHeading: string,
  /**
   * Aligns the world with the camera’s orientation.
   */
  alignmentCamera: string,
}>;

/**
 * World Alignment Types
 * Convenient constants
 */
export const WorldAlignmentTypes = {
  Gravity: 'gravity',
  GravityAndHeading: 'gravityAndHeading',
  AlignmentCamera: 'alignmentCamera',
};

export const EventTypes = {
  FrameDidUpdate: ExponentAR.frameDidUpdate,
  DidFailWithError: ExponentAR.didFailWithError,
  AnchorsDidUpdate: ExponentAR.anchorsDidUpdate,
  CameraDidChangeTrackingState: ExponentAR.cameraDidChangeTrackingState,
  SessionWasInterrupted: ExponentAR.sessionWasInterrupted,
  SessionInterruptionEnded: ExponentAR.sessionInterruptionEnded,
};

export const AnchorTypes = {
  Face: 'ARFaceAnchor',
  Image: 'ARImageAnchor',
  Plane: 'ARPlaneAnchor',
  Anchor: 'ARAnchor',
};

export const AnchorEventTypes = {
  Add: 'add',
  Update: 'update',
  Remove: 'remove',
};

export const FrameAttributes = {
  Anchors: 'anchors',
  RawFeaturePoints: 'rawFeaturePoints',
  LightEstimation: 'lightEstimation',
  CapturedDepthData: 'capturedDepthData',
};

export const TrackingStates = {
  /** Tracking is not available. */
  NotAvailable: 'ARTrackingStateNotAvailable',
  /** Tracking is limited. See tracking reason for details. */
  Limited: 'ARTrackingStateLimited',
  /** Tracking is Normal. */
  Normal: 'ARTrackingStateNormal',
};

export const TrackingStateReasons = {
  /** Tracking is not limited. */
  None: 'ARTrackingStateReasonNone',

  /** Tracking is limited due to initialization in progress. */
  Initializing: 'ARTrackingStateReasonInitializing',

  /** Tracking is limited due to a excessive motion of the camera. */
  ExcessiveMotion: 'ARTrackingStateReasonExcessiveMotion',

  /** Tracking is limited due to a lack of features visible to the camera. */
  InsufficientFeatures: 'ARTrackingStateReasonInsufficientFeatures',

  /** Tracking is limited due to a relocalization in progress. */
  Relocalizing: 'ARTrackingStateReasonRelocalizing',
};

/**
 * Tracking Configuration
 * Options for how ARKit constructs a scene coordinate system based on real-world device motion.
 * https://developer.apple.com/documentation/arkit/arconfiguration
 */
export type TrackingConfiguration = $Enum<{
  /**
   * Provides high-quality AR experiences that use the rear-facing camera precisely track a device's position and orientation and allow plane detection and hit testing.
   */
  ARWorldTrackingConfiguration: string,
  /**
   * Provides basic AR experiences that use the rear-facing camera and track only a device's orientation.
   */
  AROrientationTrackingConfiguration: string,
  /**
   * Provides AR experiences that use the front-facing camera and track the movement and expressions of the user's face.
   */
  ARFaceTrackingConfiguration: string,
}>;

export const TrackingConfigurations = {
  World: 'ARWorldTrackingConfiguration',
  Orientation: 'AROrientationTrackingConfiguration',
  Face: 'ARFaceTrackingConfiguration',
};

export function getVersion() {
  return ExponentAR.ARKitVersion;
}

const AvailabilityErrorMessages = {
  Simulator: `Cannot run EXGL in a simulator`,
  ANineChip: `ARKit can only run on iOS devices with A9 (2015) or greater chips! This is a`,
  ARKitOnlyOnIOS: `ARKit can only run on an iOS device! This is a`,
};

export function isAvailable() {
  if (
    !Constants.isDevice || // Prevent Simulators
    Platform.OS !== 'ios' || // Device is iOS
    Constants.deviceYearClass < 2015 || // Device has A9 chip
    !ExponentAR.isSupported || // ARKit is included in the build
    !ExponentAR.startAsync // Older SDK versions (27 and lower) that are fully compatible
  ) {
    return false;
  }

  return true;
}

export function getUnavailabilityReason() {
  if (!Constants.isDevice) {
    return AvailabilityErrorMessages.Simulator;
  } else if (Platform.OS !== 'ios') {
    return `${AvailabilityErrorMessages.ARKitOnlyOnIOS} ${Platform.OS} device`;
  } else if (Constants.deviceYearClass < 2015) {
    return `${AvailabilityErrorMessages.ANineChip} ${Constants.deviceYearClass} device`;
  }
  return 'Unknown Reason';
}

export function onFrameDidUpdate(listener) {
  return addListener(EventTypes.FrameDidUpdate, listener);
}

export function onDidFailWithError(listener) {
  return addListener(EventTypes.DidFailWithError, listener);
}

export function onAnchorsDidUpdate(listener) {
  return addListener(EventTypes.AnchorsDidUpdate, listener);
}

export function onCameraDidChangeTrackingState(listener) {
  return addListener(EventTypes.CameraDidChangeTrackingState, listener);
}

export function onSessionWasInterrupted(listener) {
  return addListener(EventTypes.SessionWasInterrupted, listener);
}

export function onSessionInterruptionEnded(listener) {
  return addListener(EventTypes.SessionInterruptionEnded, listener);
}

function addListener(eventType, event) {
  if (!isAvailable()) {
    return {
      remove: () => {},
    };
  }
  let listener = emitter.addListener(eventType, event);
  listener.remove = () => this.removeListener && this.removeListener(listener);

  return listener;
}

function removeListener(listener) {
  if (!isAvailable()) return;
  emitter.removeSubscription(listener);
}

export function removeAllListeners(eventType) {
  if (!isAvailable()) return;
  emitter.removeAllListeners(eventType);
}

export function performHitTest(point, types: HitTestResultType) {
  if (!isAvailable()) return;
  return ExponentAR.performHitTest(point, types);
}

export async function setDetectionImagesAsync(images) {
  if (!isAvailable()) return;
  return ExponentAR.setDetectionImagesAsync(images);
}

export function getCurrentFrame(attributes) {
  if (!isAvailable()) return;
  return ExponentAR.getCurrentFrame(attributes);
}

export function getARMatrices(near: number, far: number) {
  if (!isAvailable()) return;
  return ExponentAR.getARMatrices(near, far);
}

export function stopAsync() {
  if (!isAvailable()) return;
  return ExponentAR.stopAsync();
}

export function startAsync(view, configuration: TrackingConfiguration) {
  if (!isAvailable()) return;
  return ExponentAR.startAsync(view, configuration);
}

export function reset() {
  if (!isAvailable()) return;
  ExponentAR.reset();
}

export function resume() {
  if (!isAvailable()) return;
  ExponentAR.resume();
}

export function pause() {
  if (!isAvailable()) return;
  ExponentAR.pause();
}

export function setConfigurationAsync(configuration: TrackingConfiguration) {
  if (!isAvailable()) return;
  return ExponentAR.setConfigurationAsync(configuration);
}

export function getProvidesAudioData() {
  if (!isAvailable()) return;
  return ExponentAR.getProvidesAudioData();
}

export function setProvidesAudioData(providesAudioData: Boolean) {
  if (!isAvailable()) return;
  ExponentAR.setProvidesAudioData(providesAudioData);
}

export function setPlaneDetection(planeDetection: PlaneDetection) {
  if (!isAvailable()) return;
  ExponentAR.setPlaneDetection(planeDetection);
}

export function getCameraTexture() {
  if (!isAvailable()) return;
  return ExponentAR.getCameraTexture();
}

export function getPlaneDetection() {
  if (!isAvailable()) return;
  return ExponentAR.getPlaneDetection();
}

export function setWorldOriginAsync(matrix_float4x4) {
  if (!isAvailable()) return;
  return ExponentAR.setWorldOriginAsync(matrix_float4x4);
}

export function setLightEstimationEnabled(value: Boolean) {
  if (!isAvailable()) return;
  ExponentAR.setLightEstimationEnabled(value);
}

export function getLightEstimationEnabled() {
  if (!isAvailable()) return;
  return ExponentAR.getLightEstimationEnabled();
}

export function setAutoFocusEnabled(value: Boolean) {
  if (!isAvailable()) return;
  ExponentAR.setAutoFocusEnabled(value);
}

export function getAutoFocusEnabled() {
  if (!isAvailable()) return;
  return ExponentAR.getAutoFocusEnabled();
}

export function setWorldAlignment(worldAlignment: WorldAlignment) {
  if (!isAvailable()) return;
  ExponentAR.setWorldAlignment(worldAlignment);
}

export function getWorldAlignment() {
  if (!isAvailable()) return;
  return ExponentAR.getWorldAlignment();
}

export function isConfigurationAvailable(configuration: TrackingConfiguration) {
  if (!isAvailable()) return;
  return ExponentAR[configuration];
}

export function getSupportedVideoFormats(configuration: TrackingConfiguration) {
  const videoFormats = {
    [TrackingConfigurations.World]: 'WorldTrackingVideoFormats',
    [TrackingConfigurations.Orientation]: 'OrientationTrackingVideoFormats',
    [TrackingConfigurations.Face]: 'FaceTrackingVideoFormats',
  };
  const videoFormat = videoFormats[configuration];
  return ExponentAR[videoFormat];
}

export function isFrontCameraAvailable() {
  return ExponentAR[TrackingConfigurations.Face];
}

export function isRearCameraAvailable() {
  return ExponentAR[TrackingConfigurations.World];
}
