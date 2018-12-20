/**
 * Created on 09.02.18.
 *
 * @author Maximilian Beck <maximilian.beck@wtl.de>
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.DEBUG_ENABLED = process.env.DEBUG_ENABLED || process.env.NODE_ENV === 'development';
process.env.DEBUG_NAMESPACE = process.env.DEBUG_NAMESPACE || 'frontend:general';
process.env.STORE_DEBUG_NAMESPACE = process.env.STORE_DEBUG_NAMESPACE || 'frontend:store';
process.env.EPIC_DEBUG_NAMESPACE = process.env.EPIC_DEBUG_NAMESPACE || 'frontend:epic';
process.env.HTTP_DEBUG_NAMESPACE = process.env.HTTP_DEBUG_NAMESPACE || 'frontend:http';
process.env.HTTP_SEND_DEBUG_NAMESPACE = process.env.HTTP_SEND_DEBUG_NAMESPACE || 'frontend:http:send';
