from flask import jsonify

def api_response(data=None, message="", success=True, status=200):
    response = {
        "success": success,
        "data": data,
        "message": message
    }
    return jsonify(response), status
